---
layout: page
title: "Q168918: Alternative Solution to Obtain a MAP ROOT Share"
permalink: /kb/168/Q168918/
---

## Q168918: Alternative Solution to Obtain a MAP ROOT Share

{% raw %}

	Article: Q168918
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbdomain
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT does not currently support the ability to map a drive letter on a
	client to a directory on a server, unless the directory is shared. This
	function, known in other network implementations as MAP ROOT, is desirable for
	connecting users directly to their home directories on the server.
	
	An alternative for this is to individually share each user's home directory. This
	can be a labor-intensive process, especially for existing installations with
	large numbers of users. However, this process can be automated.
	
	This workaround will work on all Windows clients, including the Microsoft Client
	Version 3.0 for MS-DOS, Windows for Workgroups, Windows 95 and Windows NT
	Workstation versions 3.51 and 4.0.
	
	The following command, which can be used in a batch file, will automatically
	share out each user's home directory with permissions for that user only, if the
	directory currently exists and has the same name as the user. The ability to
	create a share requires Administrative Rights.
	
	  FOR %%X IN (<list of users>) DO RMTSHARE \\SERVER\%%X=C:\USERS\%%X
	  /GRANT %%X:F
	
	NOTE: Because RMTSHARE is a resource kit utility, this batch file requires the
	Windows NT Server Resource Kit to be installed on the computer on which it is
	run.
	
	Each share will be created with the user's name and the Full Control permission
	will be granted to the user for that share. Memory resources are used for each
	share on a server. Therefore, it is advisable to load- balance by dividing the
	home directories evenly among several servers.
	
	MORE INFORMATION
	================
	
	1. Use the following procedure to obtain a list of all user home directories:
	
	  a. Open an MS-DOS command prompt on the computer where the user home
	     directories reside.
	
	  b. Change to the root user directory (that is, C:\Users)
	
	  c. Get a directory listing and pipe it to a text file using the following
	     command:
	
	  DIR *. /W >> C:\Temp\Userdirs.txt
	
	  d. Use a word processor to remove extraneous text (date, and so forth) and
	     separate each name by only one space.
	
	     NOTE: The maximum number of characters on a command line is 255. Therefore,
	     you will not be able to put more than 20 to 30 user names on each line.
	     Repeat the command several times for each block of users.
	
	2. Modify each line to look like the example line above. The finished file will
	  look something like this:
	
	  NOTE: Each two-line pair should be on one line.
	
	  FOR %%X IN (USER1 USER2 USER3) DO RMTSHARE \\SERVER\%%X C:\USERS\%%X /GRANT
	  %%X:F
	
	  FOR %%X IN (USER4 USER5 USER6) DO RMTSHARE \\SERVER\%%X C:\USERS\%%X /GRANT
	  %%X:F
	
	  FOR %%X IN (USER7 USER8 USER9) DO RMTSHARE \\SERVER\%%X C:\USERS\%%X /GRANT
	  %%X:F
	
	etc.
	
	3. Save the file as a batch file and carry it out from the MS-DOS command
	  prompt.
	
	Additional query words: login logon script connect howto how to
	
	======================================================================
	Keywords          : kbnetwork kbdomain 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
