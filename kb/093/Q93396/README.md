---
layout: page
title: "Q93396: DOCERR: PrependToPath Documented Incorrectly"
permalink: /kb/093/Q93396/
---

## Q93396: DOCERR: PrependToPath Documented Incorrectly

{% raw %}

	Article: Q93396
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The PrependToPath subroutine from the Setup toolkit is incorrectly documented in
	the Setup toolkit's README.WRI file. The arguments to the subroutine should not
	be enclosed in parentheses. PrependToPath is a subroutine and, unlike functions,
	the arguments to subroutines are never put in parentheses.
	
	The syntax of the PrependToPath call is:
	
	     PrependToPath szSrc$, szDest$, szDir$, cmo%
	
	An example of a call to PrependToPath is:
	
	     PrependToPath "c:\autoexec.bat","c:\autoexec.new","c:\tmp",cmoVital
	
	szSrc$ is the full path of the original file. szDest$ is the name of new file
	created, which has the contents of the szSrc$ file with szDir$ added to the PATH
	statements. szSrc$ and szDest$ should not be the same. You can use the Setup
	function RenameFile to rename the original AUTOEXEC.BAT to a backup filename,
	and then again to rename the new file (AUTOEXEC.NEW in the code above) to
	AUTOEXEC.BAT.
	
	Additional query words: 3.10 no32bit MsSetup tool kit docerr
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
