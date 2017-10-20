---
layout: page
title: "Q103851: PC WRmt Ext: Telebit Err Msg: Failure to Reinitialize Modem"
permalink: /kb/103/Q103851/
---

## Q103851: PC WRmt Ext: Telebit Err Msg: Failure to Reinitialize Modem

{% raw %}

	Article: Q103851
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1, 3.0, 3.2 
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the version 3.2 Microsoft Mail Remote for Windows or versions 2.1,
	3.0, or 3.2 Microsoft Mail for PC Networks EXTERNAL.EXE program with the Telebit
	script, sometimes the following display appears when you reset the modem after a
	successful transmission:
	
	  Failure to initialize modem
	
	CAUSE
	=====
	
	This problem occurs if the response code stored in the response buffer contains
	two zeros. The modem was reset correctly; however, the script did not recognize
	the two zeros as being acceptable--the script was looking for only one zero to
	be returned.
	
	This error will not be consistent because sometimes the response codes are placed
	separately into the response buffer. This problem is timing dependent.
	
	RESOLUTION
	==========
	
	The lines in the script from the RESET section are:
	
	     clearrsp          ; Clear out any ring signals
	     sendln "ATV0"     ; Numeric result codes
	     sendln "ATE0"     ; Suppress command local echo
	     sendln "ATZ"      ; Reset modem to default settings
	     waitrsp 1
	
	To resolve this problem, place the waitrsp command after "ATE0", so that the
	multiple response codes from the different sendln commands do not get included
	together. The corrected RESET section should look like the following:
	
	     clearrsp          ; Clear out any ring signals
	     sendln "ATV0"     ; Numeric result codes
	     sendln "ATE0"     ; Suppress command local echo
	     waitrsp 1
	     sendln "ATZ"      ; Reset modem to default settings
	     waitrsp 1
	
	Additional query words: 2.10 3.00 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN210 kbMailRemote320
	Version           : WINDOWS:2.1,3.0,3.2
	
	=============================================================================
	

{% endraw %}
