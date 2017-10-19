---
layout: page
title: "Q196516: WD97: Ampersand Displays Incorrectly in Drop-Down Form Field"
permalink: /kb/196/Q196516/
---

## Q196516: WD97: Ampersand Displays Incorrectly in Drop-Down Form Field

	Article: Q196516
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbfield word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you are creating a drop-down form field and one of your list items includes
	an ampersand (&), the resulting item in the drop-down list is missing the
	ampersand, and the character adjacent to the ampersand may be underlined. For
	example, "AT&T" may appear in the drop-down list as:
	
	  ATT
	    -
	
	If you try to work around the problem by adding a second ampersand, the drop-down
	list correctly displays "AT&T" (without the quotation marks), but when you
	select "AT&T," it appears in the form field box as
	
	  AT&&T
	
	NOTE: Adding && results in "AT&T" in the drop-down display; however,
	when AT&T is selected, it appears as ATT and prints out as ATT on hard
	copy.
	
	In Word 97 for Windows, use of the ampersand has the following effects:
	
	- Using a single ampersand, as in AT&T, does not cause the ampersand to
	  appear, but the character next to the ampersand is underlined, as in the
	  following:
	
	     ATT
	       -
	
	  In this case, pressing T selects ATT from the drop-down list.
	
	- Using a double ampersand, as in AT&&T, causes a single ampersand to
	  appear, as in the following:
	
	     AT&T
	
	  The character next to the ampersand is not underlined. In this case, pressing
	  T does not select AT&T from the drop-down list.
	
	CAUSE
	=====
	
	By design, the ampersand is used to designate the shortcut key in drop-down
	lists for quick keyboard access. The shortcut key is underlined.
	
	
	
	Additional query words: form field incorrect underlined underline drop down drop-down dropdown
	
	======================================================================
	Keywords          : kbfield word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
