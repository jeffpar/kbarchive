---
layout: page
title: "Q177799: PRB: &quot;License Information for This Component Not Found&quot; Error"
permalink: /kb/177/Q177799/
---

## Q177799: PRB: &quot;License Information for This Component Not Found&quot; Error

	Article: Q177799
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbtophit kbCtrl kbRegistry kbVBp kbVBp500 kbVBp600 kbOSWin95 kbOSWin98 kbGrpDS
	Last Modified: 02-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 6.0, 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 6.0, 5.0 
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to add a control to a form, the following message may appear:
	
	  License information for this component not found. You do not have an
	  appropriate license to use this functionality in the design environment.
	
	CAUSE
	=====
	
	When a control is installed for run time use only (such as those installed by an
	application created with Visual Basic), if the Visual Basic Development
	Environment is installed onto the same machine afterwards and the existing
	control is of equal or higher version than that from the CD, the license key for
	that control is not updated.
	
	RESOLUTION
	==========
	
	If the control in question is any of the ones listed below, then find and
	double-click on the file Vbctrls.reg on the Visual Basic CD-ROM:
	
	- AniBtn32.ocx
	- Gauge32.ocx
	- Graph32.ocx
	- Grid32.ocx
	- KeySta32.ocx
	- MSOutl32.ocx
	- Spin32.ocx
	- Threed32.ocx
	
	This will update the design-time licenses for these controls. For Visual Basic
	5.0, Vbctrls.reg is found in the \Tools\Controls folder. For Visual Basic 6.0,
	it is found on Disk 1 in the \Common\Tools\Vb\Controls folder, and for Visual
	Studio 6.0, it is in the same folder of Disk 3. The Visual Basic 6.0 CD-ROM also
	contains these files for the Visual Basic 5.0 Custom Controls that were
	discontinued in Visual Basic 6.0:
	
	- Dbgrid.reg
	- Mschart.reg
	
	For more information, please refer to the Readme.txt file in the same folder.
	
	If the control in question is not among the controls listed above, please do the
	following:
	
	1. Locate Regsvr32.exe on your machine. Note its path.
	
	2. Locate the offending OCX file(s), usually found in the Windows\System folder
	  for Windows 95, Windows 98, and Windows Me, or the Windows\System32 folder
	  for Windows NT and Windows 2000.
	
	3. On the Start menu, click Run.
	
	4. In the Run dialog box, type the following:
	
	  "<Path to RegSvr32>\REGSVR32.EXE /u <Path to OCX>\OCXFILE.OCX "
	  (without the quotation marks)
	
	  For example:
	
	  C:\Devstudio\VB\REGSVR32.EXE /u C:\Winnt\System32\COMCTL32.OCX
	
	  NOTE: If Regsvr32.exe is in the System or System32 folder, the path is
	  optional.
	
	5. If you are reinstalling an older version of the control, you should
	  delete/remove the .OCX, .OCA and .DEP files so they will be replaced.
	
	6. Repeat the previous 3 steps for each offending OCX.
	
	7. On Control Panel, click Add\Remove Programs.
	
	8. Select Visual Basic, and click Add\Remove.
	
	9. Click Reinstall when the options (Add\Remove, Remove All, Reinstall) dialog
	  box appears.
	
	- Reapply the latest Visual Studio Service Pack, which can be obtained from:
	
	  http://msdn.microsoft.com/vstudio/sp/
	
	If the problem persists, click the article numbers below to view the articles in
	the Microsoft Knowledge Base:
	
	  Q181854 FILE: VB5cli.exe Fixes Visual Basic 5.0 Control Installation Problem
	
	  Q194751 FILE: VB6Cli.exe Fixes License Problems with Visual Basic 6.0
	
	  Q195353 FILE: VBUSC.EXE Provides Licensing for Discontinued Controls
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Set up a Windows 95, Windows 98, Windows Me, Windows NT, or Windows 2000
	  machine, Machine A, without Visual Basic 5.0 installed. Then set up a
	  development machine, Machine B, with Visual Basic 5.0 and Service Pack 3
	  installed.
	
	2. On Machine B, create a Standard EXE project. Form1 is created by default.
	
	3. Add the following component (OCX) to the Toolbox:
	
	  Comctl32.ocx
	
	4. Add at least one control from this OCX to Form1.
	
	5. Compile and save the project.
	
	6. Create a setup application using the Visual Basic Application Setup Wizard,
	  selecting all default options.
	
	7. Install the application onto Machine A.
	
	8. Install Visual Basic 5.0 on Machine A.
	
	9. Start a Standard EXE project and add Comctl32.ocx to the Toolbox.
	
	  Try to add any of the controls from this OCX, and this error message appears:
	
	  License information for this component not found. You do not have an
	  appropriate license to use this Functionality in the design environment.
	
	REFERENCES
	==========
	
	Please see the RESOLUTION section of this article for additional Microsoft
	Knowledge Base articles. For additional information, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q172193 INFO: List of VB 4.0 Custom Controls Discontinued in VB 5.0
	
	Additional query words: vbctrls
	
	======================================================================
	Keywords          : kberrmsg kbtophit kbCtrl kbRegistry kbVBp kbVBp500 kbVBp600 kbOSWin95 kbOSWin98 kbGrpDSVB kbOSWinME 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVB500 kbVB600 kbZNotKeyword3
	Version           : :5.0,6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
