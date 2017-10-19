---
layout: page
title: "Q136338: FIX: Windows 95 GDI Leak with Show Window Contents Setting"
permalink: /kb/136/Q136338/
---

## Q136338: FIX: Windows 95 GDI Leak with Show Window Contents Setting

	Article: Q136338
	Product(s): Microsoft FoxPro
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): kbenvkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With the Project Manager open, GDI resources dwindle when dragging windows
	within Visual FoxPro under Windows 95 if the Microsoft Plus feature "Show window
	contents while dragging" is enabled.
	
	WORKAROUND
	==========
	
	The loss of GDI resources can be prevented by disabling the Microsoft Plus "Show
	window contents while dragging" feature. If the GDI resources become very low,
	most may be recovered by exiting and then restarting Visual FoxPro.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Visual FoxPro 3.0b
	for Windows.
	
	MORE INFORMATION
	================
	
	Microsoft Plus is a set of companion enhancements for Windows 95 which can be
	installed to add functionality to the base feature set of Windows 95.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Install Microsoft Plus, and select the "Visual Enhancements" option when
	  installing.
	
	2. Using the right mouse button, click the Windows 95 desktop, and select
	  Properties.
	
	3. Click the Plus! tab, and select the "Show window contents while dragging"
	  check box. The Plus! tab will not be available if Microsoft Plus is not
	  installed.
	
	4. Start the Windows 95 System Resource Meter from the Start Menu. Click the
	  Start button. Then click Programs, click Accessories, click System Tools, and
	  click Resource Meter. A green icon will appear in the Taskbar to the left of
	  the clock.
	
	  If the Resource Meter does not appear in the Start menu, it has not been
	  installed. Install it by opening the Control Panel under My Computer. Click
	  the Add/Remove Programs icon. Then click the Windows Setup tab, and select
	  Accessories in the Components list. Click Details, and select the System
	  Resource Meter check box in the Components list. Click the OK button twice.
	  Windows 95 will prompt for the CD-ROM disc or floppy disk to complete the
	  installation.
	
	5. Start Visual FoxPro, and create a new project by clicking New on the File
	  menu. Click Project, and then click New File. Type testproj in the Enter box
	  of the Save As dialog box, and click Save.
	
	6. Add a new form to the project by clicking the Documents tab of the Project
	  Manager. Then select Forms, and click New. Click New Form to create the form.
	
	7. Check the current System Resources by placing the mouse pointer over the
	  green System Resource Meter icon in the taskbar. The percentage of available
	  System, User, and GDI resources appears. Note the GDI percentage.
	
	8. Click the Form Designer title bar in the center, hold down the mouse button
	  and drag the mouse pointer around the Visual FoxPro desktop as follows: top
	  right, top left, bottom left, bottom right. Repeat this about 20 times.
	
	9. Repeat step 7, and read the GDI percentage. Observe that it falls by from 1%
	  to 5% for each set of 20 drags of the form designer around the Visual FoxPro
	  desktop.
	
	Additional Notes
	----------------
	
	- The GDI does not leak memory if the Project Manager is not open or if "Show
	  window contents while dragging" is not enabled.
	
	- Closing all windows in Visual FoxPro will not fully recover the GDI resources
	  lost. Closing Visual FoxPro itself will cause most or all of the GDI
	  resources to be recovered.
	
	- During a long programming session, the GDI resources will eventually become
	  depleted. At this point, you need to exit Visual FoxPro and restart to
	  recover the resources.
	
	Additional query words: VFoxWin fixlist3.00b buglist3.00 sysmeter insufficient plus pack memory
	
	======================================================================
	Keywords          : kbenv kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : 3.00
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
