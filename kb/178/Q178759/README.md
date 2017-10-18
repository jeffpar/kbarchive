---
layout: page
title: "Q178759: XCLN: Outlook Spell Check Suggests More Words Than Exchange"
permalink: kb/178/Q178759/
---

## Q178759: XCLN: Outlook Spell Check Suggests More Words Than Exchange

	Article: Q178759
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Outlook client appears to use the same spell checking engine and dictionary
	as the Exchange client, but Outlook returns more suggestions on some words when
	a spell check is performed.
	
	CAUSE
	=====
	
	The calling executable (Exchng32.exe or Outlook.exe) employs an enhanced
	function call to the spelling library. (SCCSUGGEST, which both do and
	SCCSUGGESTMORE, which Outlook does).
	
	When a spell check is run, the application makes a SCCSUGGEST call to the
	spelling DLL, this is the initial suggestion of correct words (top replacement
	possibilities). After a specified amount of idle time, the application makes a
	SCCSUGGESTMORE call; this brings up the second set of suggestions. On a fast
	computer, it all seems to happen at the same time, on a slow computer, you see a
	pause before then the additional words are suggested. Outlook and Word use the
	SCCSUGGESTMORE call, Exchange does not.
	
	WORKAROUND
	==========
	
	To work around this problem, use Word as the E-mail editor (if you have Office
	97 installed, this should be an option) or upgrade to Outlook.
	
	STATUS
	======
	
	
	
	MORE INFORMATION
	================
	
	Installing Office 97 or copying the same Mssp2_en.lex and Mssp232.dll from
	Outlook does not change this behavior. The Exchange Client still returns the
	same limited set of suggestions.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbbug
	
	=============================================================================
	
