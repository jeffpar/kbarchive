---
layout: page
title: "Q79691: Determining User Access Rights on a Banyan VINES Network"
permalink: /kb/079/Q79691/
---

## Q79691: Determining User Access Rights on a Banyan VINES Network

{% raw %}

	Article: Q79691
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 4.10
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	Banyan VINES network users can be granted one of four types of access to
	specific directories. On a Novell network, users are granted "rights", which are
	roughly equivalent but less comprehensive.
	
	There are four types of access on a VINES network, and a user may have only one
	access type in a particular directory.
	
	The rights of each user or group of users is listed on a file on each directory.
	The list is called an ARL, or Access Rights List.
	
	The four types of access are as follows:
	
	Control
	-------
	
	The is the most comprehensive type of access and is usually given to
	administrators.
	
	The user can Control access rights to the directory and subdirectories; they can
	create, delete, modify, and read files and subdirectories.
	
	Modify
	------
	
	This is the access most users have in their own directories.
	
	Modify rights are similar to Control rights, but the user cannot control who has
	access rights to the directory.
	
	Read
	----
	
	This right is given to users of directories that contain shared files.
	
	Users can read and copy any files and subdirectories, as well as, execute any
	files.
	
	Null
	----
	
	This is used to specifically prevent access.
	
	User cannot do anything with the files or subdirectories.
	
	MORE INFORMATION
	================
	
	To display and interpret the access rights a user has in a particular directory,
	use the following steps:
	
	1. At the MS-DOS prompt, type SETARL, and press ENTER.
	
	  The File Access Rights menu appears. The screen is divided into two parts:
	  command choices appear in the top half of the screen. In the lower portion, a
	  list of users who have rights in the current directory and the level of
	  access for those users displays.
	
	  Note: The current drive is listed immediately below the horizontal line. The
	  current directory is listed just below that.
	
	2. If the directory to be examined is not currently listed, choose CHANGE
	  DIRECTORY, and press ENTER.
	
	  A box appears in which to type the new directory name. Type the directory
	  name, and press ENTER.
	
	  For every directory a display similar to the following appears:
	
	  AdminList@Finance@NorthAirlines,C
	
	StreetTalk is the Banyan VINES naming convention given to each user or group of
	users. A StreetTalk name consists of three parts: a UserName, a GroupName, and
	an OrganizationName, all separated by the At sign (@). In this display,
	AdminList@Finance@NorthAirlines is the StreetTalk name of a group of users.
	
	"C" is the Access Right and in this case, the "C" indicates that this group has
	Control rights. "R" would indicate "Read" rights.
	
	"AdminList" is the UserName and in this case consists of a list of user names.
	The user name could refer to an individual such as, "Al Smith." An asterisk in
	this field indicates that all users in the group specified by the GroupName, are
	on the ARL.
	
	"Finance" is the GroupName. "NorthAirlines" is the OrganizationName.
	
	REFERENCES
	==========
	
	"VINES Administrator's Reference," pages 6-7, 6-8
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Version           : 4.10
	
	=============================================================================
	

{% endraw %}
