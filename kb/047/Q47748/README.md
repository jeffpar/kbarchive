---
layout: page
title: "Q47748: &quot;File Does Not Exist&quot; Error in OS/2 DOS Box with Existing File"
permalink: /kb/047/Q47748/
---

## Q47748: &quot;File Does Not Exist&quot; Error in OS/2 DOS Box with Existing File

{% raw %}

	Article: Q47748
	Product(s): See article
	Version(s): 1.01 2.00 2.01
	Operating System(s): OS/2
	Keyword(s): ENDUSER | S_QuickASM | mspl13_c
	Last Modified: 10-OCT-1989
	
	When using QuickC in the DOS compatibility box under OS/2, if a file
	is locked by another application, the environment lists the file (for
	example, in File.Open), but if an attempt is made to open the file, an
	error is displayed. The file obviously exists, because the environment
	just listed it. Yet, in QuickC Version 2.00 and QuickC with
	QuickAssembler Version 2.01, the error displayed in the dialog box is
	"File Does Not Exist." In QuickC Version 1.01, the error displayed is
	"General Failure."
	
	This problem is a result of the fact that QuickC is designed for the
	single-user, DOS environment, and does not deal gracefully with a
	locked file. If you swap to the other screen group, and release the
	file, QuickC then loads the file.
	
	Note: This is a particular problem when merging files into another
	document in a protected-mode program. If, for example, you merge the
	file into a letter in Word 5.00 running in protected mode, and try to
	load the file into QuickC running in the DOS box, you will encounter
	this problem, and it will not be immediately apparent that the file is
	actually being used by another application. Saving the file in Word
	releases Word's hold on the file, since it then becomes a part of the
	letter.

{% endraw %}
