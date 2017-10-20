---
layout: page
title: "Q239879: CoCreateInstance Fails When Constructor String Is Blank"
permalink: /kb/239/Q239879/
---

## Q239879: CoCreateInstance Fails When Constructor String Is Blank

{% raw %}

	Article: Q239879
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbCOMPlus kbOSWin2000 kbDSupport kbCOMPlusAdmin kbSysAdmin
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Create a component that implements IObjectConstruct::Construct. Configure the
	component as a COM+ application and enable the object construction property, but
	do not provide a constructor string.
	
	Attempting to instantiate the COM+ object results in the following error:
	
	  Error 8004e025 Automation Error
	  COM+ Activation function failed because an initialization function failed.
	
	WORKAROUND
	==========
	
	The workaround for this problem is to enter a dummy string or just spaces in the
	Constructor String field.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior:
	----------------------------
	
	- Create a component that derives from IObjectConstruct and implements
	  IObjectConstruct::Construct but does not use a constructor string.
	
	- Configure this component in a COM+ Server Application such that object
	  construction is enabled in Component Services but the constructor string is
	  left blank.
	
	To do this:
	
	1. On the Start menu, select Programs, and then select Administrative Tools to
	  launch Component Services.
	
	2. Create a new COM+ Server Application under My Computer\COM+ Applications.
	
	3. Install your component in this Application.
	
	4. Right-click on this configured component and select Properties. Click the
	  Activation tab.
	
	5. Select the Enable Object Construction button and leave the Constructor String
	  blank.
	
	6. Try to create this component through a client application.
	
	An error message is displayed saying:
	
	  Error 8004e025 Automation Error
	  COM+ Activation function failed because an initialization function failed.
	
	If you just enter a dummy string or spaces for the constructor string, an
	instance of the object can be created.
	
	Additional query words: objectconstruct, complus, win2k, win2000
	
	======================================================================
	Keywords          : kbCOMPlus kbOSWin2000 kbDSupport kbCOMPlusAdmin kbSysAdmin 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinAdvServSearch
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
