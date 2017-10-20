---
layout: page
title: "Q141950: FIX: GP Fault When Change RecordSource of a Column in a Grid"
permalink: /kb/141/Q141950/
---

## Q141950: FIX: GP Fault When Change RecordSource of a Column in a Grid

{% raw %}

	Article: Q141950
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbVBp300bug kbvfp600 kbvfp600fix
	Last Modified: 03-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A general protection (GP) fault occurs when you change the RecordSource property
	of a column in a grid.
	
	CAUSE
	=====
	
	The GP fault may be caused by opening a table in area 256 or greater. For
	example:
	
	USE TEST IN SELECT(1)
	
	This uses the last available work area, usually 32767.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	
	1. Create a free table called Test with two fields named First and Last. Make
	  both fields Character(10). Enter a couple of rows of sample data.
	
	2. Create a blank form.
	
	3. Add a grid to your form and change its ColumnCount property to 1.
	
	4. Add a command button to your form, and place the following code in its Click
	  event: THISFORM.Grid1.Column1.ControlSource = "last"
	
	5. Add the following code to the Init event of your form: USE TEST IN 256
	  THISFORM.Grid1.RecordSource = "test"
	
	6. Run the form, and click the command button.
	
	The GP fault occurs with details similar to the following information:
	
	  VFP caused an invalid page fault in
	  module KERNEL32.DLL at 0137:bff858c0.
	  Registers:
	  EAX=7fd89e61 CS=0137 EIP=bff858c0 EFLGS=00010202
	  EBX=009dfe28 SS=013f ESP=008e0000 EBP=008e03bc
	  ECX=00000000 DS=013f ESI=815958c0 FS=3be7
	  EDX=c001ebf0 ES=013f EDI=815a8f08 GS=0000
	  Bytes at CS:EIP:
	  55 a1 78 c2 fb bf 8b ec 83 ec 70 8b 08 53 56 89
	  Stack dump:
	  ffecbad7 008e0030 008e0014 0000000e
	  00000004 c0000005 00000000 00000000
	  7fd89e61 00000002 00000000 7fd89e61
	  0001001f 00000000 00000000 00000000
	
	Additional query words: VFoxWin akz
	
	======================================================================
	Keywords          : kbVBp300bug kbvfp600 kbvfp600fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
