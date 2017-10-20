---
layout: page
title: "Q117142: HOWTO: Print to a File from FoxPro (Printer Problems Test)"
permalink: /kb/117/Q117142/
---

## Q117142: HOWTO: Print to a File from FoxPro (Printer Problems Test)

{% raw %}

	Article: Q117142
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbprint kbPrinting kbvfp300 kbvfp500 kbvfp600
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5x, 2.6x 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6x 
	- Microsoft FoxPro for Macintosh, versions 2.5x, 2.6a 
	- Microsoft FoxPro for UNIX, version 2.6 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you are having printing problems, you should try to print from the
	operating system, where applicable, as well as from other applications in order
	to determine where the problem lies. To determine whether printing from the
	operating system works, you can use a simple test such as the following, which
	shows how to print to a file from FoxPro. To run this test, issue the following
	commands in the Command window:
	
	     SET EXCLUSIVE OFF
	     SET PRINTER TO junk.txt
	     SET PRINTER ON
	     LIST STATUS TO PRINTER NOCONSOLE
	     SET PRINTER OFF
	     SET PRINTER TO
	     MODIFY FILE junk.txt
	
	REFERENCES
	==========
	
	FoxPro "Language Reference"
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint kbPrinting kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro260aMac kbFoxPro200DOS kbFoxPro260UNIX kbVFP300 kbVFP500 kbVFP600
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
