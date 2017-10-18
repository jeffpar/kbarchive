---
layout: page
title: "Q80252: PC Gen: Contents of Modem Script File CREDCARD.MDM"
permalink: kb/080/Q80252/
---

## Q80252: PC Gen: Contents of Modem Script File CREDCARD.MDM

	Article: Q80252
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1e
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 2.1e 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following is the contents of the Microsoft Mail version 2.1E modem script
	file CREDCARD.MDM, which can be compiled with SCRCOMP.EXE:
	
	  ;********************************************************************
	  ;
	  ;                    Microsoft Mail Script File
	  ;
	  ;       Filename: credcard.mdm
	  ;       Date    : March 21, 1990
	  ;       Script  : Standard script file for Hayes-compatible modems
	  ;                 modified to allow use of credit card dialing.
	  ;
	  ;     This script file contains the standard modem setup strings used
	  ;  by the External, Transmit and Listen programs. There are five
	  ;  procedures defined in this script file for setting up the modem
	  ;  and for connecting to a remote External machine.
	  ;
	  ;     The modem setup strings used here will be adequate for most
	  ;  people but there may be some changes required if you are dialing
	  ;  overseas and require a longer wait for Carrier Detect (S7 register)
	  ;  or if you wish to change the speaker volume. Note that if you used
	  ;  the -Innn option in version 1.0 or 2.0 that you will have to modify
	  ;  the S7 register and recompile this script file.
	  ;
	  ;     Consult your modem manual for more information on setup options.
	  ;
	  ;  Script procedures defined:
	  ;       INITIALIZE
	  ;       RESET
	  ;       CALL
	  ;       ANSWER
	  ;       DISCONNECT
	  ;
	  ;  Return codes for External, Transmit, Listen:
	  ;       0  - OK
	  ;       1  - CONNECT 300
	  ;       2  - not defined
	  ;       3  - NO CARRIER
	  ;       4  - ERROR
	  ;       5  - CONNECT 1200
	  ;       6  - not defined
	  ;       7  - BUSY
	  ;       8  - NO ANSWER
	  ;       9  - not defined
	  ;      10  - CONNECT 2400
	  ;      11  - not defined
	  ;      12  - CONNECT 9600 (high speed connection)
	  ;
	  ;
	  ;********************************************************************
	
	  INITIALIZE:
	          title "Credit Card Script"
	
	          $attempts = 5
	
	  init_retry:
	          sendln "ATZ"           ; reset modem to default settings
	          wait 2
	          waitrsp 1
	
	          if ("0" isin response)
	              goto reset_okay
	
	          if ("OK" isin response)
	              {
	  reset_okay:
	              sendln "ATE0V0"
	              wait 1
	              waitrsp 1
	
	              if ("0^M" isin response)
	                  {
	                  sendln "ATS0=0S7=45S9=6S10=50S12=50"
	                  waitrsp 1
	                  if (response = "0^M")
	                      return 0
	                  }
	               }
	          dec $attempts
	          if ($attempts > 0)
	                  goto init_retry
	
	          return 4
	
	  RESET:
	          sendln "ATZ"           ; reset modem to default settings
	          wait 2
	          waitrsp 1
	
	          if ("0" isin response)
	              goto reset_okay
	
	          if ("OK" isin response)
	              {
	  reset_okay:
	              sendln "ATE0V0"
	              wait 1
	              waitrsp 1
	
	              if ("0^M" isin response)
	                  {
	                  sendln "ATS0=0S7=45S9=6S10=50S12=50"
	                  waitrsp 1
	                  if (response = "0^M")
	                      return 0
	                  else
	                      return 4
	
	                  }
	               }
	
	          return 4
	
	  CALL:
	          $ret = 8               ; set default ret code to "no answer"
	
	          clearrsp               ; clear the response buffer
	
	          echo 0                 ; do not display phone number
	
	  ; If this script is specified in the phone number field then the
	  ; initialize script in the default script file may have turned off the
	  ; speaker.  The following commands will turn the speaker back on for
	  ; Hayes compatible modems:
	  ;
	          sendln "ATM1"           ; turn speaker on
	          waitrsp 1               ; get the response back from the modem
	
	  ; In order to make credit card dialing work, the modem being used must
	  ; support the ";" dial modifier.  This character returns the modem to
	  ; command state after the dial string is sent, allowing us to proceed
	  ; with further processing.  The operator is prompted to press a key.
	  ; When he does, send another dial string.  This time the dial string
	  ; is the credit card number.
	  ; Remember that the phone number must be in the form:
	  ;               0 - area code - number
	  ;
	  ;
	
	          sendln "ATD" + dial_mode + phone_number + ";"  ; execute the
	                                                         ; dial up
	
	          echo 1                 ; turn echo back on
	
	          display 'Press any key when you hear the "bong"...'
	
	  ; Wait until a key is struck
	
	  operator_wait_loop:
	          getkey
	          if (key = 0)
	            goto operator_wait_loop
	
	  ; Now send the credit card number.  You will have to replace the
	  ; number used here with your credit card number.
	
	          echo 0                  ; do not display credit card number
	
	          sendln "ATD" + dial_mode + "123-456-7890"
	
	          echo 1                  ; echo back on to see response
	
	          waitrsp 2               ; should get "OK" from modem
	          if (response != "0^M")
	            return $ret
	
	          waitrsp 120            ; wait up to 2 minutes for return code
	                                 ; from modem
	
	          if (response = "1^M")
	            {
	            baud 300
	            display ">>> CONNECT 300 <<<"
	            $ret = 1
	            }
	          else if (response = "3^M")
	            {
	            display ">>> NO CARRIER <<<"
	            $ret = 8             ; no answer or no connect
	            }
	          else if (response = "5^M")
	            {
	            baud 1200
	            display ">>> CONNECT 1200 <<<"
	            $ret = 5
	            }
	          else if (response = "10^M")
	            {
	            baud 2400
	            display ">>> CONNECT 2400 <<<"
	            $ret = 10
	            }
	
	          return $ret            ; return connect baud rate to
	                                 ;   application
	
	  ANSWER:
	          $ret = 8               ; set default ret code to "no answer"
	
	          waitrsp 1              ; see if phone is ringing
	
	          if (response = "2^M")  ; 2 is numeric form of "RING"
	              {
	              if (listen = 1)    ; see if Listen program is running or
	                  sendln "ATD"   ; not answer phone in originate mode
	                                 ;   (Listen)
	              else
	                  sendln "ATA"   ; answer the phone normally
	
	              waitrsp 120        ; wait up to 2 minutes for return code
	                                 ;   from modem
	
	              if (response = "1^M")
	                {
	                baud 300
	                display ">>> CONNECT 300 <<<"
	                $ret = 1
	                }
	              else if (response = "3^M")
	                {
	                display ">>> NO CARRIER <<<"
	                $ret = 3             ; no answer or no connect
	                }
	              else if (response = "5^M")
	                {
	                baud 1200
	                display ">>> CONNECT 1200 <<<"
	                $ret = 5
	                }
	              else if (response = "10^M")
	                {
	                baud 2400
	                display ">>> CONNECT 2400 <<<"
	                $ret = 10
	                }
	              }
	
	          return $ret            ; return connect baud rate to
	                                 ;   application
	
	  DISCONNECT:
	          wait 2                 ; wait 2 seconds
	
	          send "+++"             ; send escape sequence to put modem
	                                 ;    back to command state
	          wait 2                 ; wait 2 seconds
	
	          clearrsp               ; clear the response buffer
	
	          send "ATH0^M"          ; hang up the phone
	
	          waitrsp 1              ; wait for a response
	
	          if (response != "0^M") ; if hang up failed, drop DTR to force
	                                 ;    hang up
	              {
	              DTR 0              ; drop DTR to reset modem
	              wait 2             ; some modems require a delay here
	              DTR 1              ; raise DTR
	              }
	
	          return 0               ; always return OK
	
	Additional query words: 2.10 2.1 2.10e
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN210e
	Version           : WINDOWS:2.1e
	
	=============================================================================
	
