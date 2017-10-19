---
layout: page
title: "Q158796: Macintosh Clients Connected to WinNT Server Appear to Hang"
permalink: /kb/158/Q158796/
---

## Q158796: Macintosh Clients Connected to WinNT Server Appear to Hang

	Article: Q158796
	Product(s): Microsoft Windows NT
	Version(s): 3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 22-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Any application that uses the AFP command CatSearch, such as the Macintosh File
	Find, may reduce the server's responsiveness to other Macintosh clients on the
	network, causing them to appear to stop responding for a brief period of time.
	
	This problem will only occur when there are a large number of Macintosh clients
	on the network and the Macintosh volume on the Windows NT server contains a very
	large number of directories and files.
	
	CAUSE
	=====
	
	In Windows NT 3.51, support for the AFP CatSearch command was added. This
	command is used so the Macintosh client asks the server to do the search, rather
	than performing the search of the Macintosh volume itself. CatSearch instructs
	Windows NT to look through all directories and files, based on the specified
	search parameters. When this search is performed at the root of a Macintosh
	volume with many directories, subdirectories, and files, it can delay the
	processing of requests from other Macintosh clients and the Macintosh clients
	will appear to stop responding while they wait for their request to be
	processed.
	
	RESOLUTION
	==========
	
	To Disable CatSearch for a particular SFM volume:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Install the Windows NT 4.0 Service Pack 2.
	
	2. Run Regedt32.exe and go to the following registry location:
	
	HKLM\System\CurrentControlSet\Services\MacFile\Parameters\Volumes
	3. Select the volume on which you want to disable CatSearch, and then select
	  Multi String from the Edit menu.
	
	4. Add "DisableCatsearch=1" (without the quotation marks).
	
	5. Exit the registry editor, and then stop and restart Services for Macintosh.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.51 and
	4.0. This problem was corrected in the latest Microsoft Windows NT 4.0 U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	How AFP CatSearch Works
	-----------------------
	
	There are several ways Macintosh clients search a remote volume. One way is to
	use Enumerate, which looks similar to Microsoft's FindFirst, FindNext, which is
	a client-based search. This method puts responsibility on the client (and some
	stress on the network). Another way is for a client to send a server-based
	command, CatSearch, which puts all of the responsibility and stress on the
	server. This method is used by most Macintosh applications, such as the FindFile
	utility, by default. This command, in effect, makes the Services for Macintosh
	(SFM) server do the file search on behalf of the client. The way SMF is designed
	on Windows NT, other users are locked out of the volume until the search is
	complete. If the Macintosh volume has a large number of directories and files
	(number of directories makes a bigger impact), and the search is started at or
	near the root of the volume, the search may impact other users. This becomes an
	issue because of the way the Macintosh operating system performs network I/O.
	The Macintosh uses synchronous calls to the network, and any delay in response
	from the server causes the Macintosh to stop responding. The Macintosh File Find
	interface allows users to search sub-directories, but the default is the entire
	volume and the other option isn't very obvious. This causes most file searches
	from the Macintosh to be done on the entire volume. If applications and users
	were more selective, file look-ups would not impact the system.
	
	Possible Affect of Disabling AFP CatSearch on the Server
	--------------------------------------------------------
	
	When the AFP CatSearch command is disabled, Macintosh clients may experience long
	delays when performing Find File from the Macintosh desktop. The delays can be
	significant. A Windows NT server performing the AFP CatSearch request may lock
	the SFM volume for only a few moments, but when AFP CatSearch is disabled, a
	client may take several minutes, or more, to complete the same task. When
	disabling the AFP CatSearch command, users are advised that, if they do initiate
	a Find File, they may expect delays or long hangs while the Macintosh is
	performing this task.
	
	If a Find File is used with care, then disabling the CatSearch may become
	unnecessary. Users who need to perform the Find File should narrow down their
	choices to a few directories, rather than searching an entire volume. Also,
	extremely large volumes with lots of subfolders can increase the problem. If the
	File Find is being used constantly to access information, consider using a text
	file with the path to the needed file or a database that keeps a list of files
	in a particular volume. These methods can significantly improve server response.
	
	Additional query words: prodnt sfm
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : :3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
