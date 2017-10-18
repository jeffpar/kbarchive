---
layout: page
title: "Q136559: BUG: Space is Used Instead of PasswordChar Character"
permalink: kb/136/Q136559/
---

## Q136559: BUG: Space is Used Instead of PasswordChar Character

	Article: Q136559
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp300bBUG kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use an asterisk (*) as your PasswordChar and you have a space in your
	password, Visual FoxPro doesn't replace the space with the asterisk.
	
	WORKAROUND
	==========
	
	If you must use spaces in your passwords, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q130005 How to Use a Custom Class to Encrypt Passwords
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a form with an TextBox on it. Set the PasswordChar property to an
	  asterisk (*) or any other character.
	
	2. Run the form. Type "Visual FoxPro" (without the quotation marks) in the
	  field.
	
	Notice that the text has a space between the two words. ("****** ******")
	
	Additional query words: kbvfp300 kbvfp500 kbvfp600
	
	======================================================================
	Keywords          : kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	
