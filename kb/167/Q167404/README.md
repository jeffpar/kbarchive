---
layout: page
title: "Q167404: PRB: Problems with ODBC Setup PPC Control Panel"
permalink: kb/167/Q167404/
---

## Q167404: PRB: Problems with ODBC Setup PPC Control Panel

	Article: Q167404
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:2.5
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg kbtool kbHWMAC kbvfp kbvfp300b kbMDAC250
	Last Modified: 23-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When opening the ODBC Setup PPC control panel, the following error message is
	received (usually endlessly):
	
	  An unexpected error occurred, because an error of type -192 occurred.
	
	Or after setting up a data source in the control panel, one or more of the
	following symptoms are present:
	
	- The Shutdown command on the Special menu in Finder is missing.
	
	- The Shutdown command on the Special menu in Finder is a long string of
	  garbled text (high ASCII characters, hollow boxes, and so forth).
	
	- A message about there not being enough memory to keep open the window for the
	  hard drive, even though no other applications are running.
	
	- The above message except part or all of it is the garbled text.
	
	- The problem clears up if the Macintosh is restarted.
	
	CAUSE
	=====
	
	This is known to happen on PCI Power Macintoshes running System 7.5.5 when
	running a PowerPC-enabled application. These applications seem to cause Finder
	to hold onto additional memory creating an out-of-memory situation.
	
	RESOLUTION
	==========
	
	This has reportedly been fixed in System 7.6. In addition, the problem has not
	been reported with System 7.5.3.
	
	The following steps can also be used to correct the problem. They increase
	Finder's heap size. These steps involve the use of the ResEdit resource editor
	available from Apple Computer. Editing resources is for advanced Macintosh users
	only. Microsoft does not directly support this. This information is provided
	only as a convenience to our customers.
	
	1. Make a copy of Finder. The easiest way is to hold down the Option key while
	  dragging it out of the System folder to another folder of your choice.
	
	2. Start the ResEdit program.
	
	3. Open the copy of the Finder that was made in Step 1 above.
	
	4. Double-click the SIZE resource. A window titled "SIZEs from Finder" should
	  appear.
	
	5. Double-click the -1 ID. A window titled "SIZE ID = -1 from Finder" should
	  appear. Scroll to the bottom of it.
	
	6. Change both the Size and Min size settings to 239440. This should be an
	  increase of 50000 for each.
	
	7. Close the two windows and save the change to Finder. Then quit ResEdit.
	
	8. Rename the Finder in the current System folder and then move in the new copy
	  of Finder that was just changed in ResEdit.
	
	9. Restart the Macintosh and delete the old renamed Finder.
	
	MORE INFORMATION
	================
	
	The ODBC Setup PPC control panel from Visigenic Software ships with Visual
	FoxPro for Macintosh.
	
	The Macintosh System software and ResEdit are manufactured by Apple Computer
	Inc., a vendor independent of Microsoft; we make no warranty, implied or
	otherwise, regarding these products' performance or reliability.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. On a PCI PowerMac running System 7.5.5, open the ODBC Setup PPC control
	  panel.
	
	2. If the error message is not received immediately, set up a data source in the
	  control panel, save it, and exit the control panel.
	
	3. Examine the Special menu in Finder.
	
	NOTE: As of Dec-09-1998, Visigenic was acquired by INPRISE, Inc.
	
	For information about how to contact INPRISE, click the appropriate article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg kbtool kbHWMAC kbvfp kbvfp300b kbMDAC250 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP300bMac
	Version           : MACINTOSH:3.0b; WINDOWS:2.5
	Issue type        : kbprb
	
	=============================================================================
	
