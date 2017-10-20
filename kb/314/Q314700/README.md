---
layout: page
title: "Q314700: Encarta Reference Library: Err Msg Joining Club Encarta"
permalink: /kb/314/Q314700/
---

## Q314700: Encarta Reference Library: Err Msg Joining Club Encarta

{% raw %}

	Article: Q314700
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kberrmsg kbimu
	Last Modified: 28-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta Reference Library 2003, version 1.0 
	- Microsoft Encarta Reference Library 2003 - DVD Edition 
	- Microsoft Encarta Reference Library 2002, version 1.0 
	- Microsoft Encarta Reference Library 2002 - DVD Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to join Club Encarta or update Microsoft Encarta, you may
	receive an error message similar to the following:
	
	  Microsoft Encarta has encountered a problem and needs to close.
	
	If you click Details, you receive details similar to either of the following:
	
	  AppName:ENC200x.EXE
	  AppVer:11.0.1013.809
	  ModName: Unknown
	  ModVer: 0.0.0.0 Offset: 037d22c0
	
	-or-
	
	  AppName: enc200x.exe
	  AppVer: 11.0.1013.809
	  ModName: wsockhk.dll
	  ModVer: 4.0.3.1 offset 0008871
	
	CAUSE
	=====
	
	This behavior is caused by a conflict with the Net Nanny content-filtering
	program.
	
	RESOLUTION
	==========
	
	Use the following methods in the order presented to start the computer without
	Net Nanny, join Club Encarta or update Encarta, and then turn on Net Nanny.
	
	Start Without Net Nanny
	-----------------------
	
	Use the method appropriate to your version of Windows.
	
	Microsoft Windows 98:
	
	1. Click Start, click Run, type "msconfig.exe" (without the quotation marks) in
	  the Open box, and then click OK.
	
	2. On the General tab, click Selective Startup.
	
	3. On the Startup tab, click to clear the NetNanny check box.
	
	4. Click OK, and then restart your computer when you are prompted to do so.
	
	Microsoft Windows Millennium Edition (Me):
	
	1. Click Start, click Run, type "msconfig" (without the quotation marks) in the
	  Open box, and then click OK.
	
	2. On the General tab, click "Selective startup".
	
	3. On the Startup tab, click to clear the NetNanny check box.
	
	4. Click OK. When you are prompted to restart your computer, click Yes.
	
	Microsoft Windows XP:
	
	NOTE: You must be logged on as an administrator or a member of the Administrators
	group in to complete this procedure. If your computer is connected to a network,
	network policy settings may also prevent you from completing this procedure.
	
	1. Click Start, click Run, type "msconfig" (without the quotation marks) in the
	  Open box, and then click OK.
	
	2. On the General tab, click Selective Startup.
	
	3. On the Startup tab, click to clear the NetNanny check box.
	
	4. Click OK, and then click Restart to restart your computer.
	
	Join Club Encarta or Update Encarta
	-----------------------------------
	
	Start Encarta, and then do either or both of the following (in the order
	presented):
	
	- On the Help menu, click Join Club Encarta.
	
	- On the Tools menu, click Update Encarta.
	
	Follow the instructions to complete the processes.
	
	Restart the Computer Normally to Turn On Net Nanny
	--------------------------------------------------
	
	Use the method appropriate to your version of Windows.
	
	Windows 98:
	
	1. Click Start, click Run, type "msconfig" (without the quotation marks) in the
	  Open box, and then click OK.
	
	2. On the General tab, click Normal Startup, and then click OK.
	
	3. When you are prompted to restart your computer, click Yes.
	
	Windows Me:
	
	1. Click Start, click Run, type "msconfig" (without the quotation marks) in the
	  Open box, and then click OK.
	
	2. On the General tab, click "Normal startup".
	
	3. Click OK. When you are prompted to restart your computer, click Yes.
	
	Windows XP:
	
	1. Click Start, click Run, type "msconfig" (without the quotation marks) in the
	  Open box, and then click OK.
	
	2. On the General tab, click "Normal Startup - load all device drivers and
	  services".
	
	3. Click OK. When you are prompted to restart your computer, click Restart.
	
	MORE INFORMATION
	================
	
	For more information about Net Nanny, browse to the following Net Nanny Web
	site:
	
	  http://www.netnanny.com
	
	Microsoft provides third-party contact information to help you find technical
	support. This contact information may change without notice. Microsoft does not
	guarantee the accuracy of this third-party contact information.
	
	The third-party products that are discussed in this article are manufactured by
	companies that are independent of Microsoft. Microsoft makes no warranty,
	implied or otherwise, regarding the performance or reliability of these
	products.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbimu 
	Technology        : kbHomeProdSearch _IKkbbogus kbEncartaSearch kbMMSearch kbEncartaRef2002 kbEncartaRef2002DVD
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
