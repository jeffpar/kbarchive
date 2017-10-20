---
layout: page
title: "Q188880: SMS: OSR2 and Internet Explorer 4.0 Inventoried as Windows 98"
permalink: /kb/188/Q188880/
---

## Q188880: SMS: OSR2 and Internet Explorer 4.0 Inventoried as Windows 98

{% raw %}

	Article: Q188880
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2
	Operating System(s): 
	Keyword(s): kbInventory smsinv
	Last Modified: 27-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On systems installed with Windows 95 OEM Service Release 2 (OSR2) and Microsoft
	Internet Explorer 4.0 (build 4.03.1212), Systems Management Server inventories
	the operating system as Windows 98.
	
	
	WORKAROUND
	==========
	
	To resolve this problem, obtain the hotfix mentioned in the STATUS section of
	this article, or wait for the next Systems Management Server service pack. The
	hotfix should have the following timestamp:
	
	  Intel
	  -----
	
	  5/18/98   6:11pm   110,560   Invproc.dll
	
	Additional supporting inventory files:
	
	  3/30/98   12:45pm  149,632   Dbcnv12a.exe
	  3/10/98   7:56pm    19,444   Getcomp.exe
	  2/19/98   1:34pm   282,560   Inv32cli.exe
	  2/19/98   1:34pm   295,312   Invwin32.exe
	  8/06/98   4:15pm   536,608   Base4.dll
	
	  Alpha
	  -----
	
	  5/18/98   6:10pm   227,328   Invproc.dll
	
	Additional supporting inventory files:
	
	  3/30/98   12:45pm  578,320   Dbcnv12a.exe
	  2/19/98   1:33pm   866,064   Inv32cli.exe
	  2/19/98   1:33pm   881,936   Invwin32.exe
	  8/06/98   4:13pm   917,264   Base4.dll
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 1.2. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: invdos invdos.exe win95 win98 prodsms IE
	
	======================================================================
	Keywords          : kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS120
	Version           : :1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
