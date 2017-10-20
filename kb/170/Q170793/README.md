---
layout: page
title: "Q170793: PPT7: Error Editing PowerPoint File Type in Windows Explorer"
permalink: /kb/170/Q170793/
---

## Q170793: PPT7: Error Editing PowerPoint File Type in Windows Explorer

{% raw %}

	Article: Q170793
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use Windows Explorer to view the settings for the following file types
	
	- Microsoft PowerPoint Addin
	
	- Microsoft PowerPoint Animation
	
	- Microsoft PowerPoint Presentation
	
	- Microsoft PowerPoint SlideShow
	
	- Microsoft PowerPoint Template
	
	- Microsoft PowerPoint Wizard
	
	you receive the following error message:
	
	  The specified program could not be found. Make sure the filename and path are
	  correct.
	
	This error occurs when you click OK to exit the "Editing Action for Type" dialog
	box.
	
	NOTE: To locate the "Editing Action for Type" dialog box, in Windows Explorer,
	click Options on the View menu, and click the File Types tab. In the Registered
	File Types list, click Microsoft PowerPoint Presentation, and then click Edit.
	
	CAUSE
	=====
	
	This error occurs because PowerPoint was installed in a folder with a long file
	name and the path to the executable file was not enclosed in quotation marks (")
	when the program was registered.
	
	WORKAROUND
	==========
	
	To work around this problem, use either of the following methods:
	
	Method 1. Cancel the Error Message
	
	When you receive the error message, click Cancel rather than OK.
	
	Method 2. Enclose the Path in Quotation Marks
	
	
	Use the following procedure to add the quotation marks to the Open action for the
	Microsoft PowerPoint Presentation file type. The procedure for correcting the
	other actions for the other file types is similar.
	
	1. On the Windows Start menu, point to Programs, and then click Windows
	  Explorer.
	
	2. On the View menu, click Options, and then click the File Types tab.
	
	3. In the Registered File Types list, click Microsoft PowerPoint Presentation.
	
	4. Click Edit.
	
	5. In the Actions list, click Open. Click Edit.
	
	6. In the "Application Used to Perform Action" box change this:
	
	     C:\Program Files\Microsoft Office\Office\PowerPnt.exe "%1"
	
	  to this:
	
	     "C:\Program Files\Microsoft Office\Office\PowerPnt.exe" "%1".
	
	7. Click OK.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft PowerPoint 97 for
	Windows. This problem was corrected in Microsoft PowerPoint 97 SR-1.
	
	Additional query words: ppt95 ppt7.0 file locked can't be found netware dcl408.exe cannot kberrmsg kbnetwork
	
	======================================================================
	Keywords          :  
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search
	Version           : WINDOWS:7.0
	Hardware          : x86
	
	=============================================================================
	

{% endraw %}
