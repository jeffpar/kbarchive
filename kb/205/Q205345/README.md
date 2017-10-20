---
layout: page
title: "Q205345: CMD.exe Err w/ Path or File Name Exceeding Max_Path / 256 Char's"
permalink: /kb/205/Q205345/
---

## Q205345: CMD.exe Err w/ Path or File Name Exceeding Max_Path / 256 Char's

{% raw %}

	Article: Q205345
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.5
	Operating System(s): 
	Keyword(s): kberrmsgkbfixlist
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft BackOffice Server versions 4.0, 4.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The DELETE or RENAME functions of the Cmd.exe utility may stop functioning
	correctly if a path or file name exceeds either the max_path length setting or
	256 characters on the NTFS file system partitions.
	
	On drive X with a subfolder or file name that exceeds the max_path setting or 256
	characters, an attempt to delete or rename the file or files may generate an
	error message, such as "There are no more files" or "File not found."
	
	CAUSE
	=====
	
	This problem occurs because Cmd.exe imposes a 256 character limit. NTFS does not
	have this type of limit on file name length or total path length. The character
	limit also applies when you use Cmd.exe on FAT partitions.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, click the following
	article number to view the article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	WORKAROUND
	==========
	
	To work around this problem, rename subfolders in the path to a file so that the
	total path or file name is less than the max_path setting or 256 characters.
	Start with subfolders that are closer to the root so that you are always working
	with less than 256 characters.
	
	For a file name that is not in a subfolder and that exceeds the 256 character
	limit, you may be able to use the 8.3 alias to access the file, make a copy of
	the file, and then rename the copy.
	
	For paths and file names that exceed the limit and that are located on an NTFS
	partition, use Windows Explorer to delete or rename the file.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Windows NT Server 4.0, Terminal Server Edition Service Pack 4.
	
	Additional query words: Access Violation
	
	======================================================================
	Keywords          : kberrmsg kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbBackOfficeSearch kbBackOfficeServ400 kbBackOfficeServ450
	Version           : :4.0,4.5
	Hardware          : x86
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
