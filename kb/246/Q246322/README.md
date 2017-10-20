---
layout: page
title: "Q246322: System Administration of Backups, Tar, and Pax in Interix"
permalink: /kb/246/Q246322/
---

## Q246322: System Administration of Backups, Tar, and Pax in Interix

{% raw %}

	Article: Q246322
	Product(s): Microsoft Windows NT
	Version(s): 2.2.1,2.2.2,2.2.3,2.2.4
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 24-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Interix versions 2.2.1, 2.2.2, 2.2.3, 2.2.4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the system administration of backups, tar, and pax in
	Interix.
	
	MORE INFORMATION
	================
	
	Traditionally, tape backups are made by using tape archive (tar) and cpio.
	Although it may appear to be beneficial to continue using tar or portable
	archive exchange (pax) on an Interix system, it is not recommended. Instead, use
	a 32-bit Windows backup tool. A reason for this is that the Microsoft Windows NT
	security system uses 32-bit user IDs. The tar file format as specified by
	Portable Operating System Interface for UNIX (POSIX) uses a 16-bit user ID. The
	Interix user ID is generated from the Windows NT Security ID (SID in Windows NT
	documentation).
	
	As a side effect, the Interix user ID is not identical to the Windows NT security
	ID. The Windows NT security ID for a user is unique everywhere, but a POSIX user
	ID is unique only within the network of a trusted domain.
	
	From the tar man page:
	
	Sometimes when creating or writing to an archive, the following message is
	printed to standard error:
	
	  uid nnnnnn too large to fit in header: substituting 32666
	
	On traditional computers, the user ID and group ID numbers fit into 16 bits, but
	on Interix, they can be 32 bits long. The Interix user IDs and group IDs don't
	fit into the tar or USTAR archive formats. This implementation substitutes the
	value 32666 (decimal) for the original user ID or group ID.
	
	As a consequence, you can receive error messages when you unpack tar archives you
	created because they do not contain your user ID.
	
	You may consider using the pax program as a partial solution, because the USTAR
	format created by pax permits the archive to store the string that represents
	the ID numbers. But neither tar or pax back up the access control lists (ACLs)
	associated with 32-bit Windows files. Because they have not been backed up, they
	cannot be restored. 32-bit Windows files will not be properly backed up or
	restored. Using pax is only a solution for files restricted to the Interix
	environment.
	
	A better solution is to use a 32-bit Windows backup program. It will store all of
	the ACLs associated with all of the files, and do so from a single point of
	control.
	
	For additional information, see the following Interix Web site:
	
	  http://www.interix.com/NewInterix/technotes/note0006.html
	
	Additional query words: 2.2.10 2.2.20 2.2.30 2.2.40
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbInterixSearch kbUNIXSearch kbInterix221 kbInterix222 kbInterix223 kbInterix224
	Version           : :2.2.1,2.2.2,2.2.3,2.2.4
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
