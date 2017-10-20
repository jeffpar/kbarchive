---
layout: page
title: "Q99298: LMSFM Does Not Support Sharing Info on CD-ROM"
permalink: /kb/099/Q99298/
---

## Q99298: LMSFM Does Not Support Sharing Info on CD-ROM

{% raw %}

	Article: Q99298
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	LAN Manager Services for Macintosh (LMSFM) does not support sharing information
	on CD-ROM with Macintosh clients.
	
	MORE INFORMATION
	================
	
	LMSFM attempts to create a set of hidden directories in any directory tree
	shared as a Macintosh volume. The set includes the ~AFP directory that is used
	for storing desktop information and resource forks, and the ~I directory, which
	may be used for icon and permission information. Because CD-ROM is a read-only
	medium, the service cannot create these directories and the attempt to share the
	volume fails. The service cannot create them on a different (read-write)
	device.
	
	If you need both Macintosh and PC connectivity to a CD-ROM, you have to share in
	on an Apple Share server and run a PC Apple share protocol to allow the LAN
	Manager PC users to read the drive. There are many third party solutions
	available.
	
	Additional query words: sfm 1.00 1.00a
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
