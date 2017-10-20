---
layout: page
title: "Q175839: PPT: Troubleshooting Damaged Presentations on Windows 95"
permalink: /kb/175/Q175839/
---

## Q175839: PPT: Troubleshooting Damaged Presentations on Windows 95

{% raw %}

	Article: Q175839
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:4.0,4.0a,4.0c,7.0
	Operating System(s): 
	Keyword(s): kbinterop kbtshoot kbdta kbconversion
	Last Modified: 03-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	- Microsoft PowerPoint for Windows, versions 4.0, 4.0a, 4.0c 
	-------------------------------------------------------------------------------
	
	For a Microsoft Microsoft PowerPoint 2002 version of this article, see Q291911.
	
	For a Microsoft Microsoft PowerPoint 2000 version of this article, see Q207377.
	
	For a Microsoft Microsoft PowerPoint 97 version of this article, see Q189549.
	
	SYMPTOMS
	========
	
	If you are experiencing unexpected behavior when working with a Microsoft
	PowerPoint file, your presentation may be damaged or corrupted. Symptoms of a
	corrupted presentation include:
	
	- Invalid Page Fault, General Protection Fault, or Illegal Instruction errors.
	
	- A message that says "This is not a PowerPoint Presentation," when you attempt
	  to open a presentation.
	
	- Out of memory errors, or low system resources errors.
	
	If this unexpected behavior is exclusive to one presentation, the presentation
	may be corrupted. This article provides some common steps you can use to attempt
	the recovery of a damaged presentation. However, keep in mind that these steps
	do not guarantee successful recovery of the damaged file. In some cases,
	depending on the type of corruption, you will not be able to recover any data
	and you will have to re-create the damaged presentation.
	
	NOTE: In some cases you may receive the above symptoms for reasons other than a
	corrupted presentation.
	
	RESOLUTION
	==========
	
	If you determine that the presentation has been corrupted, try the following
	methods to attempt to recover the damaged file. The methods listed below are
	split into the following sections:
	
	- General Troubleshooting
	
	- If You Are Unable to Open a Presentation
	
	- If You Are Able to Open a Damaged Presentation
	
	Follow the procedures in the General Troubleshooting section first.
	
	General Troubleshooting
	-----------------------
	
	NOTE: Although some of these troubleshooting steps can be used in Windows 3.1 and
	Windows NT, many are targeted for Windows 95.
	
	Restart Windows in Safe Mode. To do this, follow these steps:
	
	1. Restart the computer. When you see the "Starting Windows 95" message, press
	  the F8 key, and then select Command Prompt Only from the Startup menu.
	
	  NOTE: If Windows starts, edit the Autoexec.bat file, remove or disable the
	  "win" line, and repeat step 1.
	
	2. Start Windows 95 with a minimal set of Windows drivers by typing the
	  following line:
	
	  win /d:m
	
	  NOTE: If networking components are required to start Windows 95, type the
	  following line instead of the line above:
	
	  win /d:n
	
	If you are able to open your presentation after Windows has started in Safe Mode,
	then a system conflict exists that is preventing you from opening your
	presentation.
	
	IF YOU ARE UNABLE TO OPEN A PRESENTATION
	
	Method 1: Drag the Presentation to the PowerPoint Program File
	--------------------------------------------------------------
	
	1. Determine the location of the PowerPoint program on your computer.
	
	  The default locations for PowerPoint 4.0 and 7.0 are:
	
	  C:\MSOffice\Powerpnt
	
	  -or-
	
	  C:\Powerpnt
	
	2. Drag the damaged PowerPoint presentation to the PowerPoint program icon.
	
	Method 2: Double-Click the PowerPoint Presentation in Windows Explorer
	----------------------------------------------------------------------
	
	Method 3: Attempt to Insert Slides into a Blank Presentation
	------------------------------------------------------------
	
	1. On the File menu, click New.
	
	2. Click Blank Presentation and then click OK.
	
	3. If the New Slide dialog box appears, click OK.
	
	  The selection you make in this dialog box does not matter. You can delete this
	  slide after you recreate your presentation.
	
	4. On the Insert menu, click Slides From File.
	
	5. Select the damaged presentation and then click Insert.
	
	  If this operation is successful, all of the slides from the damaged
	  presentation, excluding the slide master, are inserted in the new
	  presentation.
	
	6. Save the presentation.
	
	  If your presentation does not look the way you expect after trying these
	  steps, try applying the damaged presentation as a template. To do this,
	  follow these steps:
	
	  a. Make a back-up copy of your presentation.
	
	  b. On the Format menu, click Apply Design.
	
	  c. Select the damaged presentation and then click Apply.
	
	     The slide master of the damaged presentation replaces the new slide
	     master.
	
	     NOTE: If you begin to experience unexpected behavior, the template may have
	     corrupted the presentation. In this case, use the back-up copy and
	     re-create the master slide.
	
	Method 4: Try opening the Presentation in PowerPoint Viewer
	-----------------------------------------------------------
	
	If you are unable to open the presentation in PowerPoint Viewer, your PowerPoint
	installation may be corrupted or the presentation may contain corrupted
	objects.
	
	Method 5: Move the File to Another Computer
	-------------------------------------------
	
	In some cases, copying the PowerPoint file to a different computer allows you to
	open the presentation. If you are able to open the file, look at each slide to
	determine if there are any blank object placeholders. If there are, delete them.
	Resave the presentation and then copy the presentation back to the original
	computer.
	
	Method 6: Move the File to Another Disk
	---------------------------------------
	
	Windows may not be able to read the file from where it is currently saved. Try
	copying the file to another disk. For example, copy the file from a floppy disk
	to the hard disk.
	
	NOTE: If you are unable to copy the file from the disk on which it is saved, it
	may be cross-linked with other files or folders, or it may be located in a
	damaged sector of the disk. Try Method 7.
	
	Method 7: Run ScanDisk
	----------------------
	
	Run ScanDisk to repair all errors on the drive. Have it repair all cross-linked
	files and convert lost fragments to files.
	
	NOTE: Even though ScanDisk may determine that your file is cross-linked and
	repair it, this is not a guarantee that the file will be readable by
	PowerPoint.
	
	Method 8: Copy the File to a Macintosh Computer
	-----------------------------------------------
	
	Copy the file to a Macintosh computer and open it in PowerPoint for the
	Macintosh.
	
	NOTE: This procedure requires that you install the PowerPoint 97 converter for
	PowerPoint 4.0 for the Macintosh. To obtain this converter, please go to
	
	the following Microsoft Web site:
	
	  http://www.microsoft.com/PowerPoint/FreeStuff/Cnv_Overview.htm
	
	
	YOU ARE ABLE TO OPEN A DAMAGED PRESENTATION
	
	Method 1: Attempt to Apply the Damaged Presentation as a Template
	-----------------------------------------------------------------
	
	Insert the slides into a blank presentation, and then apply the damaged
	presentation as a template to preserve the master.
	
	1. On the File menu, click New.
	
	2. Click Blank Presentation and then click OK.
	
	3. If the New Slide dialog box appears, click OK.
	
	  The selection you make in this dialog box does not matter. You can delete this
	  slide after you recreate your presentation.
	
	4. On the Insert menu, click Slides From File, and click the Find Presentation
	  tab.
	
	5. Click Browse, select the damaged presentation and then click Open.
	
	  The Slide Finder dialog box appears.
	
	6. Click Insert All.
	
	  If successful, this operation inserts all of the slides from the damaged
	  presentation, excluding the slide master, in the new presentation.
	
	7. Save the presentation.
	
	  If your presentation does not look the way you expect, try applying the
	  damaged presentation as a template. To do this, follow these steps:
	
	  a. Create a back-up copy of the presentation.
	
	  b. On the Format menu, click Presentation Template.
	
	  c. Select the presentation, and then click Apply.
	
	     The slide master of the damaged presentation replaces the new slide master.
	
	  NOTE: If you begin to experience unexpected behavior, the template may have
	  corrupted the presentation. In this case, use the back-up copy and recreate
	  the master slide.
	
	Method 2: Paste the Slides from the Damaged File into a New File
	----------------------------------------------------------------
	
	Use a copy and paste operation to move the slides from the damaged presentation
	to a blank presentation. To do this, follow these steps:
	
	1. Open the damaged presentation.
	
	2. On the File menu, click New.
	
	3. Click Current Presentation Format.
	
	  This step applies the same slide master used by the damaged presentation.
	
	4. On the View menu, click Slide Sorter.
	
	  If you receive errors when you switch views, try changing to Outline view
	  instead.
	
	5. Select a slide to copy.
	
	6. On the Edit menu, click Copy.
	
	  If you want to copy more than one slide at a time, press SHIFT and click each
	  slide you want to copy.
	
	7. Switch to the new presentation. On the Window menu, click the new
	  presentation option.
	
	8. On the View menu, click Slide Sorter.
	
	9. On the Edit menu, click Paste.
	
	10. Repeat steps 5 through 9 until the entire presentation is transferred.
	
	NOTE: In some situations one damaged slide may cause a problem for the entire
	presentation. If you notice odd behavior within the new presentation after
	copying a slide to it, that slide is most likely corrupted. Either recreate the
	slide or copy portions of the slide to a new slide.
	
	Method 3: Save the presentation as RTF (Rich Text Format)
	---------------------------------------------------------
	
	If the corruption is throughout the presentation, saving as RTF may be the only
	option to recover the file. This method, if successful, recovers only the text
	that appears in Outline view. To do this:
	
	1. Open the presentation.
	
	2. On the File menu, click Save As.
	
	3. In the Save File As Type list, select Outline (RTF Text).
	
	4. In the File Name box, type the name you want, pick a location to store the
	  file, and then click Save.
	
	5. Close the file.
	
	NOTE: To continue working after you open the RTF file, click Open on the File
	menu, and in the List Files Of Type list, select All Readable Outlines or All
	Files. RTF files do not appear if you select the Presentations option.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q156126 Troubleshooting Windows 95 Using Safe Mode
	
	  Q159572 OFF97: Right-Clicking File Causes Error and Computer Stops
	
	  Q164519 Troubleshooting Office Kernel32.dll Errors Under Windows 95
	
	  Q88082 PPT: Error Opening Untranslated PowerPoint File
	
	Additional query words: ppt powerpt 7.0 95 8.0 powerpnt pages faults illegal invalid acts weird crashed crash broken gpf ipf hosed corrupt
	
	======================================================================
	Keywords          : kbinterop kbtshoot kbdta kbconversion 
	Technology        : kbPowerPtSearch kbPowerPt95 kbZNotKeyword2 kbPowerPt95Search kbPowerPt400 kbPowerPt400c kbPowerPt400a
	Version           : WINDOWS:4.0,4.0a,4.0c,7.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
