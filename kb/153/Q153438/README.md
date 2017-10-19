---
layout: page
title: "Q153438: Microsoft Phone Does Not Translate Letters to Numbers"
permalink: /kb/153/Q153438/
---

## Q153438: Microsoft Phone Does Not Translate Letters to Numbers

	Article: Q153438
	Product(s): Microsoft Mail For PC Networks
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Phone, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Phone may incorrectly dial a phone number that contains letters.
	
	CAUSE
	=====
	
	Microsoft Phone does not translate letters into corresponding DTMF tones if the
	"Use country code and area code" check box in the Dialing Options dialog box is
	not selected.
	
	RESOLUTION
	==========
	
	In the Dialing Options dialog box, click the "Use country code and area code"
	check box to select it. This setting causes Microsoft Phone to translate letters
	into the corresponding DTMF tones needed to place a call. For example, the phone
	number 425-936-ABCD would be translated to 425-936-2223.
	
	MORE INFORMATION
	================
	
	If the "Use country code and area code" check box is not selected, Microsoft
	Phone interprets letters in a phone number literally. For example, the phone
	number 425-555-ABCD would be dialed as 425-555-ABCD, which would result in the
	call not being completed because there are no tones assigned to the letters
	"ABCD."
	
	Additional query words: 95 1.00 tazz
	
	======================================================================
	Keywords          : win95 
	Technology        : _IKkbbogus kbMSHardwareSearch kbPhone
	Version           : :1.0
	
	=============================================================================
	
