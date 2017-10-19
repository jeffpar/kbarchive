---
layout: page
title: "Q167776: Certain Bitmap Fonts May Cause STOP 0x1E Message"
permalink: /kb/167/Q167776/
---

## Q167776: Certain Bitmap Fonts May Cause STOP 0x1E Message

	Article: Q167776
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Certain applications running on Windows NT that use bitmap fonts may cause
	Windows NT version 4.0 to have a STOP 0x0000001E error. The following parameters
	may be returned with the Stop error:
	
	  STOP 0x0000001E(0xc0000005, 0x80131c41, 0x00000000, 0x00000008)
	
	Testing has found that this error may occur with the ATI Ultra 32 and any S3
	Video Adapters.
	
	CAUSE
	=====
	
	Bytes in the bitmap font that are normally ignored and should have been masked
	out, were not and, therefore, caused a miscalculation in the display font
	handler.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : x86
	Issue type        : kbbug
	
	=============================================================================
	
