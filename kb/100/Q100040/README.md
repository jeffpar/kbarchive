---
layout: page
title: "Q100040: PC Forms: Updates to MAPI Visual Basic API"
permalink: /kb/100/Q100040/
---

## Q100040: PC Forms: Updates to MAPI Visual Basic API

{% raw %}

	Article: Q100040
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:1.0,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Electronic Forms Designer, version 1.0, used with:
	   - Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the updates to Messaging Application Program Interface
	(MAPI) for Microsoft Visual Basic versions 2.0 and 3.0 for Windows that were
	made for version 1.0 of Microsoft Electronic Forms Designer. For an explanation
	of the MAPI changes, please refer to the Electronic Forms Designer "Developer's
	Guide," Chapter 11, "Simple MAPI for Visual Basic."
	
	NOTE: The MAPI information from Electronic Forms Designer supersedes the MAPI
	information in the version 3.2 Microsoft Mail for PC Networks "Technical
	Reference" manual.
	
	- Incorporated the following information throughout Chapter 11 of the
	  "Developer's Guide":
	
	  The following two return values are documented in the "Technical Reference"
	  manual, but are not used and should be ignored:
	
	     MAPI_E_NO_RECIP
	     MAPI_E_BAD_RECIP
	
	  The following three return values are incorrectly documented in the "Technical
	  Reference" manual:
	
	     Technical Reference Uses    Header Files Use
	     ----------------------------------------------------------------
	
	     MAPI_E_USER_ABORT           MAPI_USER_ABORT
	     MAPI_E_AMBIG_RECIP          MAPI_E_AMBIGUOUS_RECIPIENT
	     MAPI_E_LOGON_FAILURE        MAPI_E_LOGIN_FAILURE
	
	  Your applications should use the return value names listed in the header
	  files.
	
	  This information is in the "Technical Reference" README file and should be
	  added to the "Technical Reference" manual.
	
	- Deleted the Originator field from the MapiMessage type (pages 198-199).
	
	  This field is documented in the "Technical Reference" manual but it does not
	  exist; if you use this field, your code will not compile.
	
	- Added additional information about the Subject field of MapiMessage (page
	  199).
	
	  Add the following information to the "Technical Reference" manual:
	
	  " (Messages saved with MAPISaveMail are not limited to 256 characters.)"
	  (without the quotation marks)
	
	- Changed the description of the RecipClass field of MapiRecip (page 200).
	
	  Change the following description in the "Technical Reference" manual
	
	  (Messages can be sorted by recipient class.)
	
	  to:
	
	  " (Recipients can be sorted by recipient class.) " (without the quotation
	  marks)
	
	- Changed the description of the EditFields parameter of MAPIAddress (page
	  202).
	
	  Changed the Recips parameter to the Recipients() parameter throughout the
	  description. Correct the "Technical Reference" manual to correctly reference
	  this parameter.
	
	- Added a "Flags" parameter to MAPISaveMail (pages 219-220).
	
	  Add this parameter to the MAPISaveMail function in the "Technical Reference"
	  manual.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:1.0,3.0,3.2
	
	=============================================================================
	

{% endraw %}
