---
layout: page
title: "Q257691: FIX: Dynamically Loaded UserControl Does Not Send Changes"
permalink: /kb/257/Q257691/
---

## Q257691: FIX: Dynamically Loaded UserControl Does Not Send Changes

{% raw %}

	Article: Q257691
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbCtrl kbDatabase kbDataBinding kbVBp600bug kbGrpDSVBDB kbDSupport kbVS600sp4
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a UserControl is dynamically loaded onto a form, the edits made in a
	data-bound textbox are not communicated back to the data source in certain
	scenarios. If you click from an edited data-bound textbox to a data-bound
	UserControl, the data you have changed in the textbox is not communicated back
	to the datasource. Tabbing away from the data-bound textbox to the data-bound
	UserControl does allow the edits to be communicated back to the datasource and
	does update the data.
	
	This behavior is seen in the compiled version (.exe file) of the application. The
	behavior is not seen when the application is running within the development
	environment.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a bug in the Microsoft products that are
	listed at the beginning of this article. This bug was corrected in the latest
	service pack for Visual Studio 6.0.
	
	For additional information about Visual Studio service packs, click the following
	article numbers to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	To download the latest Visual Studio service pack, visit the following Microsoft
	Web site:
	
	  http://msdn.microsoft.com/vstudio/downloads/updates.asp
	
	Additional query words: sp4
	
	======================================================================
	Keywords          : kbActiveX kbCtrl kbDatabase kbDataBinding kbVBp600bug kbGrpDSVBDB kbDSupport kbVS600sp4fix kbVS600sp5fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
