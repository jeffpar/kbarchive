---
layout: page
title: "Q137522: FPNW Keeps Directory Handles Open, Preventing Deletion"
permalink: /kb/137/Q137522/
---

## Q137522: FPNW Keeps Directory Handles Open, Preventing Deletion

{% raw %}

	Article: Q137522
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft File and Print Services for NetWare version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to delete one or more directories on an FPNW server is unsuccessful.
	The delete command completes without error, but the directory being deleted
	remains until such time as another client, which happens to have an open search
	handle to the directory, either logs off or deletes its drive mapping to the
	shared resource.
	
	CAUSE
	=====
	
	When a NetWare client searches a directory, either to locate a specific file or
	to list files in the directory, a search handle must be created on the server.
	Since NetWare clients do not notify the server when they are done with the
	handle, the server keeps the handle open (in order to satisfy any later
	directory lookup operations that the client may want to submit).
	
	This can cause a problem when a NetWare client gets a DIR listing of a directory
	on an FPNW server, and another client -- or someone at the server console --
	then attempts to delete the same directory.
	
	If the FPNW server keeps the search open too long, clients can't delete the
	directory. If the FPNW server closes the search too soon, clients are unable to
	read the entire contents of the directory. There are some situations, such as
	when the client that issued the DIR logs off, in which the FPNW server knows it
	may delete the search handle safely. Note too, that if a particular client is
	the only one with an open search handle, it may also delete the directory since,
	once again, FPNW knows that it is safe to do so in this situation.
	
	WORKAROUND
	==========
	
	Directories that cannot be deleted for the reason discussed above will be
	deleted successfully once the client(s) with open search handles have logged off
	and/or deleted their mapping to the shared resource. A partial fix for this
	problem is also available in the form of an updated copy of Fpnwsrv.sys. This
	update allows FPNW to close directory search handles in some situations where it
	could not before. Specifically, if a NetWare client comes in and does a
	FileSearchInit and then sends FileSearchContinue for both directory and
	nondirectory files and enumerates them all, then the search will be closed out.
	
	So if the client does:
	
	  DIR \FOLDER1\FOLDER2
	
	then FPNW won't keep the search handle open and the directory can be deleted. But
	if the client does:
	
	  DIR \FOLDER1\FOLDER2\TEST.TXT
	
	then FPNW probably will keep the search handle open, depending on what the client
	does.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in File and Print Services for
	NetWare version 3.51. This problem was corrected in the latest Windows NT 3.51
	U.S. Service Pack. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt 3.51 novell
	
	======================================================================
	Keywords          :  
	Technology        : kbServicesNetwareSearch kbFPNW351
	Version           : winnt:3.51
	
	=============================================================================
	

{% endraw %}
