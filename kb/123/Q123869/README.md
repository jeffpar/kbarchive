---
layout: page
title: "Q123869: BUG: Trouble Changing Where SETUP Installs MASM"
permalink: /kb/123/Q123869/
---

## Q123869: BUG: Trouble Changing Where SETUP Installs MASM

{% raw %}

	Article: Q123869
	Product(s): Microsoft Macro Assembler
	Version(s): 6.11
	Operating System(s): 
	Keyword(s): kbMASM611 kbDSupport
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), version 6.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During installation of MASM version 6.11, you are given the option of changing
	where the setup program will install MASM. However, if you choose to do so, it
	does not work the way you'd expect.
	
	For example, the default directory for executable files is shown in an edit field
	as:
	
	  C:\MASM611\BIN
	
	If you move the cursor to the B and press the Insert key to change to overstrike
	mode, the cursor does not change in appearance, and it incorrectly advances one
	space to the I. If you move the cursor back one space to the B and type EXE, the
	directory is updated correctly to C:\MASM611\EXE. However, if you didn't notice
	that the cursor has advanced and left it on the I, the result would be
	C:\MASM611\BEXEBIN.
	
	
	RESOLUTION
	==========
	
	Once the correct directory name is entered in the edit field, the installation
	proceeds as expected.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the products listed at the beginning
	of this article. We are researching this problem and will post new information
	here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: buglist6.11
	
	======================================================================
	Keywords          : kbMASM611 kbDSupport 
	Technology        : kbMASMsearch kbAudDeveloper kbMASM611
	Version           : :6.11
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
