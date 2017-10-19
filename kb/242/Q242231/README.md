---
layout: page
title: "Q242231: PRB: The Mouse Pointer Cannot Be Changed in a SnapIn Project"
permalink: /kb/242/Q242231/
---

## Q242231: PRB: The Mouse Pointer Cannot Be Changed in a SnapIn Project

	Article: Q242231
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:1.1,1.2,6.0
	Operating System(s): 
	Keyword(s): kbMMC kbVBp600 kbGrpDSPlatform kbMMC110 kbDSupport kbMMC120 kbSnapIn
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Management Console, versions 1.1, 1.2 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When developing a SnapIn project using the Microsoft Management Console (MMC)
	Snap-In Designer for Visual Basic, the ability to change the mouse pointer
	(cursor) is not provided.
	
	CAUSE
	=====
	
	The MMC specification does not allow a snap-in to change the mouse cursor
	because no single snap-in can control the MMC container.
	
	RESOLUTION
	==========
	
	An OCX View does allow a mouse pointer to be changed from within the MMC
	container. A UserControl container object exposes a MousePointer property that
	will allow the mouse pointer to be changed when the pointer is positioned over
	the OCX View. The following sample code shows how to use the property:
	
	     UserControl.MousePointer = vbHourglass
	
	STATUS
	======
	
	This behavior is by design.
	
	REFERENCES
	==========
	
	  Q242229 Create an OCX View with the MMC Snap-In Designer for Visual Basic
	
	Additional query words: snapin designer mmc
	
	======================================================================
	Keywords          : kbMMC kbVBp600 kbGrpDSPlatform kbMMC110 kbDSupport kbMMC120 kbSnapIn 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600 kbMMCSearch kbMMC110 kbMMC120
	Version           : WINDOWS:1.1,1.2,6.0
	Issue type        : kbprb
	
	=============================================================================
	
