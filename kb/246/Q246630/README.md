---
layout: page
title: "Q246630: INFO: &quot;COM+ Services Type Library&quot; Replaces MTS References in VB"
permalink: /kb/246/Q246630/
---

## Q246630: INFO: &quot;COM+ Services Type Library&quot; Replaces MTS References in VB

{% raw %}

	Article: Q246630
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbCOMPlus kbMTS kbOSWin2000 kbVBp kbVS600 kbUpgrade kbDSupport
	Last Modified: 28-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The name of the type library that has all the COM+ ObjectContext, Object
	Control, and related functions and objects is "COM+ Services Type Library" in
	Windows 2000.
	
	MORE INFORMATION
	================
	
	To be able to use ObjectContext to control transaction outcome and gather
	information about the execution context or to receive a callback on activation
	and deactivation or to use the Shared Property Manager in an early-bound
	fashion, you must set a reference to the COM+ Services Type Library. This is
	different than for Windows NT 4.0, where those libraries are called "Microsoft
	Transaction Server Type Library" and "Shared Property Manager Type Library."
	
	REFERENCES
	==========
	
	MSDN Online Library COM+ Programmer's Reference
	(http://msdn.microsoft.com/isapi/msdnlib2.idc?theURL=/library/psdk/cossdk/cosprogreftoplevel_0asl.htm)
	
	(c) Microsoft Corporation 2000, All Rights Reserved.
	Contributions by Edward Jezierski, Microsoft Corporation
	
	
	Additional query words: MTS COM+ 1.0 Migration References Type Library Transaction Server 2.0
	
	======================================================================
	Keywords          : kbCOMPlus kbMTS kbOSWin2000 kbVBp kbVS600 kbUpgrade kbDSupport 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinAdvServSearch
	Version           : WINDOWS:6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
