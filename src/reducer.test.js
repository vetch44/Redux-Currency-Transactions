import reducer from './reducer';


describe('reducer', () => {
    it('should handle rateChange', () => {
      expect(
        reducer([], {
          type: 'rateChanged',
          text: '1.14'
        })
      ).toEqual(
        {
            exchangeRate: Number('1.14')
        }
      )
    }),
    it('should handle nameOfTransaction', () => {
        expect(
          reducer([], {
            type: 'nameOfTransaction',
            text: 'Groceries'
          })
        ).toEqual(
          {
              transactionName:  'Groceries'
          }
        )
      })
  })
