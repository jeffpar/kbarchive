---
layout: page
title: "Q190661: XADM: Cannot Install Exchange 5.5 After Installing CDO 1.21"
permalink: /kb/190/Q190661/
---

## Q190661: XADM: Cannot Install Exchange 5.5 After Installing CDO 1.21

{% raw %}

	Article: Q190661
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:1.21,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Collaboration Data Objects (CDO), version 1.21 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to install Microsoft Exchange Server 5.5 on a computer on which
	Collaboration Data Objects (CDO) version 1.21 is installed, the following error
	messages may be displayed and the installation process may not complete
	successfully:
	
	   - Self registration of the DLL c:\exchsrvr\bin\cdohtml.dll failed.
	
	   - The specified procedure could not be found.
	
	CAUSE
	=====
	
	When you install CDO 1.21, an updated version of the Cdohtml.dll file is
	installed on your hard disk. The Exchange Server 5.5 installation program is
	unable to update this version of the Cdohtml.dll file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem has been corrected in the latest U.S. service pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	
	MORE INFORMATION
	================
	
	After you apply the fix, you must restart your computer before attempting to
	install Exchange Server 5.5 again.
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbCDOsearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbCDO121
	Version           : WINDOWS:1.21,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
