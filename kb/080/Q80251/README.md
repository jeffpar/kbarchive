---
layout: page
title: "Q80251: PC Gen: Contents of Modem Script File BUSY.MDM"
permalink: kb/080/Q80251/
---

## Q80251: PC Gen: Contents of Modem Script File BUSY.MDM

	Article: Q80251
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1e
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 2.1e 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following is the Microsoft Mail version 2.1e modem script file BUSY.MDM,
	which can be compiled with SCRCOMP.EXE:
	
	  ;********************************************************************
	  ;
	  ;                    Microsoft Mail Script File
	  ;
	  ;       Filename: busy.mdm
	  ;       Date    : Jun 12, 1990
	  ;       Script  : Script file to prevent dialing out
	  ;
	  ;  This script is intended to be used in the phone number field for
	  ;  one or more postoffices in the Admin Setup screen.
	  ;
	  ;  Script procedures defined:
	  ;       CALL
	  ;       DISCONNECT
	  ;
	  ;********************************************************************
	
	  CALL:
	          display ">>> No dialout performed <<<"
	
	          return 7               ; return "busy" signal
	
	  DISCONNECT:
	          wait 2                 ; wait 2 seconds
	
	          send "+++"             ; send escape sequence to put modem
	                                 ;    back to command state
	          wait 2                 ; wait 2 seconds
	
	          clearrsp               ; clear the response buffer
	
	          sendln "ATH0"          ; hang up the phone
	
	          waitrsp 1              ; wait for a response
	
	          if (response != "0^M") ; if hang up failed, drop DTR to force
	                                 ;    hang up
	              {
	              DTR 0              ; drop DTR to reset modem
	              wait 2             ; some modems require a delay here
	              DTR 1              ; raise DTR
	              clearrsp           ; clear response buffer
	              }
	
	          return 0               ; always return OK
	
	Additional query words: 2.1 2.10e 2.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN210e
	Version           : WINDOWS:2.1e
	
	=============================================================================
	
