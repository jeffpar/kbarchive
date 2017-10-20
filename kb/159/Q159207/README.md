---
layout: page
title: "Q159207: SCSI Specification Reassign Blocks Command Set to One"
permalink: /kb/159/Q159207/
---

## Q159207: SCSI Specification Reassign Blocks Command Set to One

{% raw %}

	Article: Q159207
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SCSI specification reassign blocks command is set to 0x01 instead of 0x04.
	You may not experience specific problems associated with this.
	
	
	CAUSE
	=====
	
	The second sentence of the first paragraph of section 9.2.10 (reassign blocks
	command) of the SCSI Specification X3T9.2/375R revision 10K states:
	
	  The defect list length is equal to four times the number of defect
	  descriptors and does not include the defect list length header.
	
	Windows NT 3.51 erroneously multiplies this field by 1 instead of 4.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the following fix.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51.
	
	A fix to this problem is in development, but has not been regression tested and
	may be destabilizing in production environments. Microsoft does not recommend
	implementing this fix at this time. Contact Microsoft Product Support Services
	for more information on the availability of this fix.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
