---
layout: page
title: "Q231942: Cannot Undock Notebook Computer with LS-120 Removable Drive"
permalink: /kb/231/Q231942/
---

## Q231942: Cannot Undock Notebook Computer with LS-120 Removable Drive

{% raw %}

	Article: Q231942
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2.0,2.1,2.5
	Operating System(s): 
	Keyword(s): kbhw osr2 win95 kbHardwarekbfixlist
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, versions 2.0, 2.1, 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You cannot undock a notebook computer when an LS-120 IDE Floptical drive is
	installed in the docking station.
	
	CAUSE
	=====
	
	The Input Output Supervisor (IOS) query remove request does not succeed on the
	suspend operation when the system is attempting to undock because the device is
	of type DCB_TYPE_floppy.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time    Version      Size    File name
	  ------------------------------------------------
	  04/12/99  09:18p  4.00.1114    68,962  Ios.vxd
	
	NOTE: You must install the AMD-K6-2 update before installing this hotfix.
	
	
	
	To work around this problem, shut down the computer before you undock the
	notebook computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	For additional information about the AMD-K6-2 Update, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q192841 Difficulties Using AMD K6-2 or Athlon Central Processing Unit
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbhw osr2 win95 kbHardware kbfixlist
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR25 kbWin95OPKOSR210
	Version           : :2.0,2.1,2.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
