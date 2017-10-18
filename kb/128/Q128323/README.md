---
layout: page
title: "Q128323: PC WRmt: MCI Credit Card Calling /Modem Script"
permalink: kb/128/Q128323/
---

## Q128323: PC WRmt: MCI Credit Card Calling /Modem Script

	Article: Q128323
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, versions 3.2, 3.2a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Version 3.2 and 3.2a of Microsoft Mail Remote for Windows supports the use of a
	credit card modem script to place a call via the MCI phone system and credit any
	charges to the MCI credit card. Below is the CALL section of the script. To
	apply this functionality to other scripts, copy the code between the comments
	BEGIN HERE and STOP HERE, and paste into the same CALL section of the script for
	the modem that you are using.
	
	NOTE: The phone number to dial below, represented by #s, may be replaced by the
	phone_number variable.
	
	MORE INFORMATION
	================
	
	  CALL:
	
	  ; BEGIN HERE
	
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
	  ; When he does, send another dial string.  This time the dial string is
	  ; the credit card number.
	  ; Remember that the phone number must be in the form:
	  ;               0 - area code - number
	
	        ; standard number to call to get into MCI
	        sendln "ATD" + dial_mode + "9,1,8009501022;"
	
	        ; turn echo back on
	        echo 1
	
	        display 'Press any key when you hear the tone...'
	
	  ; Wait until a key is struck
	
	  operator_wait_loop:
	        getkey
	        if (key = 0)
	          goto operator_wait_loop
	
	  ; Now send the phone number of external and the credit card number.
	  ; ### = phone number to call, should be EXTERNAL.EXE number
	  ; $$$ = credit card number.
	  ; You will have to replace this with your credit card number.
	
	        ; do not display credit card number
	        echo 0
	
	        sendln "ATD" + dial_mode + "0,##########,,$$$$$$$$$$$$$$"
	
	        ; echo back on to see response
	        echo 1
	
	        ; should get "OK" from modem
	        waitrsp 2
	        if (response != "0^M")
	              return $ret
	
	        ; wait until the modem responds (max 2 minutes)
	        waitrsp 120
	  ; STOP HERE
	
	     if (response = "1^M")
	        {
	        display ">>> CONNECT 300 <<<"
	        $ret = 1
	        }
	     else if (response = "3^M")
	        {
	        display ">>> NO CARRIER <<<"
	        $ret = 3
	        }
	     else if(response = "4^M")
	        {
	        display ">>> ERROR <<<"
	        $ret = 4
	        }
	     else if (response = "5^M")
	        {
	        display ">>> CONNECT 1200 <<<"
	        $ret = 5
	        }
	     else if (response = "6^M")
	        {
	        display ">>> NO DIALTONE <<<"
	        $ret = 6
	        }
	     else if (response = "7^M")
	        {
	        display ">>> BUSY <<<"
	        $ret = 7
	        }
	     else if(response = "8^M")
	        {
	        display ">>> NO ANSWER <<<"
	        }
	     else if (response = "10^M")
	        {
	        display ">>> CONNECT 2400 <<<"
	        $ret = 10
	        }
	     else if (response = "13^M")
	        {
	        display ">>> CONNECT 9600 <<<"
	        $ret = 12
	        }
	     else if (response = "14^M")
	        {
	        display ">>> CONNECT unknown/ARQ <<<"
	        $ret = 12
	        }
	     else if (response = "15^M")
	        {
	        display ">>> CONNECT 1200/ARQ <<<"
	        $ret = 5
	        }
	     else if (response = "16^M")
	        {
	        display ">>> CONNECT 2400/ARQ <<<"
	        $ret = 10
	        }
	     else if (response = "17^M")
	        {
	        display ">>> CONNECT 9600/ARQ <<<"
	        $ret = 12
	        }
	     else if (response = "18^M")
	        {
	        display ">>> CONNECT 4800 <<<"
	        $ret = 11
	        }
	     else if (response = "19^M")
	        {
	        display ">>> CONNECT 4800/ARQ <<<"
	        $ret = 11
	        }
	     else if(response = "20^M")
	        {
	        display ">>> CONNECT 7200 <<<"
	        $ret = 12
	        }
	     else if(response = "21^M")
	        {
	        display ">>> CONNECT 12000 <<<"
	        $ret = 14
	        }
	     else if (response = "22^M")
	        {
	        display ">>> CONNECT 12000/ARQ <<<"
	        $ret = 14
	        }
	     else if (response = "24^M")
	        {
	        display ">>> CONNECT 7200/ARQ <<<"
	        $ret = 12
	        }
	     else if(response = "25^M")
	        {
	        display ">>> CONNECT 14400 <<<"
	        $ret = 14
	        }
	     else if (response = "26^M")
	        {
	        display ">>> CONNECT 14400/ARQ <<<"
	        $ret = 14
	        }
	     else
	        {
	        display ">>> CONNECT FAILED <<<"
	        }
	     return $ret
	
	Additional query words: 3.00 3.10 3.20 3.20a Remote Scripts
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2,3.2a
	
	=============================================================================
	
