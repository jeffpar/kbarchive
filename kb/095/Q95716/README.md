---
layout: page
title: "Q95716: Error Message &quot;Cannot Create Program Workspace&quot;"
permalink: /kb/095/Q95716/
---

## Q95716: Error Message &quot;Cannot Create Program Workspace&quot;

{% raw %}

	Article: Q95716
	Product(s): Microsoft FoxPro
	Version(s): 2.50 2.50a | 2.50 2.50a 3.00
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 19-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for MS-DOS, versions 2.5, 2.5a 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Page A-7 in the FoxPro 2.5 for MS-DOS "Developer's Guide" and page B-7 in the
	FoxPro 2.5 for Windows "Developer's Guide" state the following about the error
	message "Cannot create program workspace":
	
	  Cannot create program workspace
	  FoxPro was not able to create enough workspace upon startup.
	  This may be due to insufficient rights to the directory or not enough disk
	  space.
	
	"Workspace" is the area where FoxPro does temporary work during execution. Note
	there must be enough available disk space to store these temporary files;
	normally, 2 MB is adequate.
	
	NOTE: In Visual FoxPro, this error message is described in online Help, under the
	"Error Message" topic.
	
	MORE INFORMATION
	================
	
	The MS-DOS version of FoxPro creates its temporary files in the current working
	directory unless an alternative location is specified by including one or more
	of the SORTWORK, EDITWORK, PROGWORK, and/or TMPFILES statements in the CONFIG.FP
	file.
	
	FoxPro for Windows, however, will create its temporary files in the same
	directory in which Windows stores its temporary files unless an alternative
	location is specified by including one or more of the SORTWORK, EDITWORK,
	PROGWORK, and/or TMPFILES statements in the CONFIG.FPW file. The location of
	Windows .TMP files is set by the MS-DOS TEMP environment variable, which is
	specified in the AUTOEXEC.BAT file.
	
	Additional query words: VFoxWin FoxDos FoxWin errmsg err msg
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250 kbFoxPro250a kbVFP300
	Version           : 2.50 2.50a | 2.50 2.50a 3.00
	
	=============================================================================
	

{% endraw %}
