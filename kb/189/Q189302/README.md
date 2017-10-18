---
layout: page
title: "Q189302: BUG: RequestTimeout = 0 Does Not Work Within ITC"
permalink: kb/189/Q189302/
---

## Q189302: BUG: RequestTimeout = 0 Does Not Work Within ITC

	Article: Q189302
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Once the RequestTimeout property of Internet Transfer Control is set to 0,
	calling methods such as Execute for FTP resource generates the following error:
	
	  "Run-time error '35754': Unable to connect to remote host".
	  Calling Execute for HTTP resource causes error 12002 "Timeout".
	
	CAUSE
	=====
	
	According to the documentation, setting timeout to 0 means infinity. This is
	incorrect; the Internet Transfer Control does not interpret 0 as infinity.
	
	RESOLUTION
	==========
	
	To avoid the problem, do not set timeout to 0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	REFERENCES
	==========
	
	Visual Basic, Internet Transfer Control On-line Help
	
	Additional query words: kbDSupport kbVBp500bug kbVBp kbDSupport kbdsi kbNoKeyWord
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	
	=============================================================================
	
