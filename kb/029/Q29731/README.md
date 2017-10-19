---
layout: page
title: "Q29731: Missing Semicolon on Line 17 of Example on Page 85 in Manual"
permalink: /kb/029/Q29731/
---

## Q29731: Missing Semicolon on Line 17 of Example on Page 85 in Manual

	Article: Q29731
	Product(s): See article
	Version(s): 1.00   | 1.00
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | docerr | mspl13_basic
	Last Modified: 29-AUG-1988
	
	On Page 85 of the "Microsoft Editor for MS OS/2 and MS-DOS: User's
	Guide," there is a missing semicolon on line 17.
	   The following line is incorrect:
	
	   cfile = FileNameToHandle("", NULL)
	
	   It should read as follows:
	
	   cfile = FileNameToHandle("", NULL);
