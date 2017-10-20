---
layout: page
title: "Q245474: Storage Methods for Server-Based User Profiles"
permalink: /kb/245/Q245474/
---

## Q245474: Storage Methods for Server-Based User Profiles

{% raw %}

	Article: Q245474
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the various options available to you for storing multiple
	user profiles on a computer running Windows NT 4.0 Server.
	
	MORE INFORMATION
	================
	
	Windows NT 3.51 server-based user profiles can be stored on computers running
	Windows NT Server version 4.0, and vice-versa. However, there are two advantages
	to storing Windows NT version 4.0 server-based user profiles on computers
	running Windows NT Server version 4.0; you can run System Policy Editor
	(Poledit.exe) and you can directly modify the Ntuser.dat file using the Registry
	Editor tool by loading a registry hive (in this case, Ntuser.dat).
	
	Roaming user profiles should not be stored on the Netlogon share if you have more
	than one logon server to avoid version problems. For example, assume that you
	are validated by \\<ServerA> when you log on, and your roaming profile is
	copied from that server. Any changes to your user profile are saved to
	\\<ServerA> when you log off. If you are validated by \\<ServerB>
	the next time you log on, your newer user profile is not downloaded.
	
	However, because mandatory user profiles are not copied back to the server when a
	user logs off, they are excellent candidates to be stored on the domain
	controller Netlogon share. When you set a user's profile path to
	<%Logonserver%> (for example, <%Logonserver%>\<Filename.man>),
	his or her profile is copied from the logon server used to validate the user's
	logon. If more than one logon server is used in your organization, use the
	Folder Replication service to automatically copy mandatory user profiles to all
	logon servers.
	
	NOTE: When you are using the Folder Replication service, be sure you do not
	remove the mandatory user profiles from the Export folder. The Import folder is
	always kept in synchronization with the Export folder. Therefore, if you remove
	the mandatory user profiles from the Export folder, they are removed from the
	Import folder.
	
	To begin, place the mandatory profiles and system policies in the Export folder
	and wait for replication to finish. New and updated polices are placed in the
	Export folder.
	
	Server-based user profiles should never be stored in the root level of a user's
	home folder. Because every file in the user profile folder is copied over the
	network for server-based user profiles, storing server-based user profiles in a
	user's home folder can result in very long logon times. For this reason, user's
	server-based user profiles should be stored in dedicated user profile folders.
	However, this dedicated folder can be a subfolder of the home folder, or some
	other user folder. Unfortunately, you cannot user the <%username%>
	environment variable for the user profile path because <%username%> does
	not expand when text follows it (for example,
	\\<Servername>\<Sharename>\<%username%>\ profile).
	
	A good practice is to place server-based user profiles on NTFS-formatted
	partitions. You can then use Windows NT security to prevent users from deleting
	mandatory profiles, or other users' roaming profiles.
	
	Mandatory user profile paths should not point to the folder that stores the local
	user profile because user profile changes are always cached locally. If you set
	a mandatory user profile path to the local profile folder, user profile changes
	made by the user are always saved when the user logs off. For example, if you
	store User A's mandatory user profile on User A's local computer
	(\\<User1>) in the \\<User1>\Winnt\Profiles\<User1> folder,
	the user profile is always overwritten, even if the user profile has the .man
	file extension. To avoid this problem, store mandatory user profiles on a server
	or in a folder on the local computer other than the Windows NT profiles folder
	(typically C:\Winnt\Profiles).
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
