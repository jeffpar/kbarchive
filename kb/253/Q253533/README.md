---
layout: page
title: "Q253533: Using the Person Entry Count to Determine the Number of Users"
permalink: /kb/253/Q253533/
---

## Q253533: Using the Person Entry Count to Determine the Number of Users

{% raw %}

	Article: Q253533
	Product(s): Microsoft Windows NT
	Version(s): 2.1
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 03-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services, version 2.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you view the properties of the DSA (Server) object in the directory or the
	Known Universe, there is a value called Person Entry Count. This is not the
	current count of users in the directory. It is the number of users in the
	directory since the count was last performed. Running a Management Agent or
	Replication Agreement does not update this value.
	
	MORE INFORMATION
	================
	
	The Person Entry Count value is updated in the following two ways:
	
	- When Microsoft Metadirectory Services (MMS) is started or restarted, it
	  performs an initial Person Entry Count and updates this value. It also
	  records the entry in the Zoomserv\Data\Logs\Genlog file.
	
	- After the initial count is made, it is recounted periodically (approximately
	  every 12 hours) by a low-priority thread.
	
	Additional query words: VIA users in the directory
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbMMSSearch kbMMS210
	Version           : :2.1
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
