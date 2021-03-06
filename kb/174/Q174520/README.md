---
layout: page
title: "Q174520: Error Numbers Associated with Inaccessible Roaming Profiles"
permalink: /kb/174/Q174520/
---

## Q174520: Error Numbers Associated with Inaccessible Roaming Profiles

{% raw %}

	Article: Q174520
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you log on to a computer running Windows NT Workstation 4.0 or Windows NT
	Server 4.0 in a domain with roaming profiles configured, the following error
	message is displayed:
	
	  Your roaming profile is not available, the operating system is
	  attempting to log you on with your local profile. <error #>
	
	-or-
	
	  The update of your roaming profile failed. Please contact your Network
	  Administrator. <error #>
	
	Furthermore, in the Event Viewer Application Log of the client computer, the
	following event may be logged:
	
	  Event ID: 1000
	  Source:   Userenv
	  Description: Your roaming profile is not available, the operating system
	  is attempting to log you on with your local profile. (error #)
	
	The description may also read:
	
	  You do not have permission to access your central profile located at
	  \\Server\Share\%UserName%. The operating system is attempting to log you
	  on with your local profile. Please contact you Network Administrator.
	
	The various error codes that appear are important to diagnosing the source of the
	problem. These error codes include 2, 53, 67, 71, and 1385.
	
	CAUSE
	=====
	
	For error 2, the customer may be using a mandatory profile and the system cannot
	find the file specified, or the default user profile may have been deleted.
	
	For error 32, the problem is that the profile is being accessed by another
	process. A possible cause is that the user is already logged on with the same
	account at another computer.
	
	For error 53, the error is that the network path is not found.
	
	For error 67, the error is that the network name could not be found. This could
	occur if the syntax in the user's profile path is incorrect.
	
	For error 71, the problem is that the server where the profile is stored will not
	permit another connection.
	
	For error 1385, the problem is that the user does not have the user right to
	"Access this machine from network." This usually occurs if an administrator has
	removed the everyone group from this right.
	
	RESOLUTION
	==========
	
	For error 2, verify that the location of the mandatory profile is the same as
	the location referenced in the user's profile path, and that it is named
	Ntuser.man, or restore or re-create a default user profile for the computer.
	
	For error 32, log the other process off.
	
	For error 53, it could be a problem of name resolution or network connectivity.
	Resolve these issues appropriately.
	
	For error 67, verify that the path listed matches the location of the share and
	directory name where the profile is stored.
	
	For error 71, verify that the server has the necessary number of licenses and
	that it is a retail version of NT.
	
	For error 1385, add the appropriate user or group to this list.
	
	MORE INFORMATION
	================
	
	The Windows NT Server Resource Kit version 4.0, Supplement 2 has a utility that
	translates the source for each of the error codes mentioned above. Net helpmsg #
	also gives information on each of the codes. In order to find the source of
	errors for error codes other than the ones listed in this article, at an MS-DOS
	command prompt type:
	
	C:\>NET HELPMSG <error#>
	
	or
	
	C:\>TRANSLATE <error#>
	
	Additional query words: profile mandatory ZAK userenv
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
