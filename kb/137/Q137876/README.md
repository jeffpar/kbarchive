---
layout: page
title: "Q137876: PPT7: Saving as PowerPoint 4.0 Presentation Can Lose OLE Objects"
permalink: kb/137/Q137876/
---

## Q137876: PPT7: Saving as PowerPoint 4.0 Presentation Can Lose OLE Objects

	Article: Q137876
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbole
	Last Modified: 16-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you open a PowerPoint 4.0 presentation in PowerPoint 95 and then save it as a
	PowerPoint 4.0 presentation again, some OLE objects may be lost. This will
	happen if the OLE object in the original presentation contains corrupt
	information.
	
	CAUSE
	=====
	
	Corrupt OLE objects come into PowerPoint 95 as a generic OLE object placeholder
	with a picture of the original object. When you try to save this as a PowerPoint
	4.0 presentation, PowerPoint 95 rejects this object.
	
	You can check if an OLE object is corrupt by double-clicking it. If you receive
	the following error message, the object may be corrupt:
	
	  The server application, source file, or item cannot be found.
	  You should reinstall the server application.
	
	If other OLE objects created by the same server application work correctly, you
	know this object is corrupt.
	
	WORKAROUND
	==========
	
	If this does occur, there is not much you can do to restore the OLE object to be
	recognized by its editing application. You can, however, prevent the object from
	being lost by converting it to a picture. To do so, follow these steps:
	
	1. Select the object and click Cut on the Edit menu.
	
	2. Click Paste Special on the Edit menu.
	
	3. Choose Picture from the list of data types.
	
	This enables the embedded object to remain as a picture, but it can no longer be
	edited.
	
	Additional query words: 7.00 powerpt w_powerpt powerpnt missing destroy delete graph orgchart organization chart wordart document word excel spreadsheet worksheet
	
	======================================================================
	Keywords          : kbole 
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search
	Version           : WINDOWS:7.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
