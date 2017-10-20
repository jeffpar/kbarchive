---
layout: page
title: "Q150946: PRB: Setup Hangs While &quot;Updating System Files&quot;"
permalink: /kb/150/Q150946/
---

## Q150946: PRB: Setup Hangs While &quot;Updating System Files&quot;

{% raw %}

	Article: Q150946
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbAppSetup kbVBp400 kbGrpDSVB
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During the installation of Visual Basic 4.0, the computer hangs at the end of
	the setup while the "Updating System Files" dialog is displayed. Performing a
	CTRL+ALT+DELETE usually frees the system and shows a General Protection Fault in
	REGOCX16.EXE.
	
	The Visual Basic 4.0 setup installs all of the program files and then attempts to
	register the components that need registering. OLE automation servers and OCX
	Custom Controls are self-registering. This means that the function within them
	that causes the control to write its registration information to the registry
	must be called by some other application. The Visual Basic 4.0 setup program
	uses the registration utility REGOCX16.EXE to call the function in the control
	that performs the registration.
	
	In some cases, other OCX Custom Controls have exhibited the same behavior as
	described above.
	
	CAUSE
	=====
	
	The problem is not with the REGOCX16.EXE file, as the General Protection Fault
	might indicate. Rather, the cause is with the OCX Custom Controls. The problem
	appears to a timing issue caused by a combination of the OCX registration code,
	the operating system and BIOS/hardware caching algorithms.
	
	RESOLUTION
	==========
	
	Four of the most troublesome controls have been fixed in the maintenance release
	of Visual Basic 4.0. Any customer with this problem is eligible for the upgrade
	free-of-charge. Contact Visual Basic Technical Support for the update.
	
	The following controls have been updated:
	
	  COMDLG16.OCX
	  PICCLP16.OCX
	  MSOUTL16.OCX
	  DBLIST16.OCX
	
	Procedure for Replacing Regocx16 During Setup
	---------------------------------------------
	
	1. Obtain the updated registration utility by using the following methods:
	
	  a. This file ships with Microsoft Visual C/C++ version 1.52. It is named
	     REGSVR.EXE. Rename it to REGOCX16.EXE.
	
	  b. Contact Visual Basic Support for the file.
	
	
	NOTE: This file is not really an update. It is simply a different version. that
	displays message boxes that seem to suppress the problem.
	
	1. Uninstall Visual Basic:
	
	  a. Run the Visual Basic Setup and Remove All. This is not always possible
	     given the nature of the problem.
	
	  b. Delete the directory that Visual Basic was installed into.
	
	  c. Delete OC25.DLL from the \WINDOWS\SYSTEM directory.
	
	2. Where applicable, go into the CMOS/BIOS settings and disable all caches.
	
	3. Start the Visual Basic 4.0 16-bit installation.
	
	4. Replace the REGOCX16.EXE file.
	
	  a. The first dialog has a caption that reads "Microsoft Visual Basic
	     4.0-16-bit Setup". At this time, go to the File Manager. From the View
	     menu, go to the submenu By File Type... and select Show Hidden/System
	     Files.
	
	  b. Search your hard drives for a subdirectory (it has the hidden attribute
	     set) named ~mssetup.t. Change to that subdirectory. Look for another
	     subdirectory named ~msstfqf.t.(you should now be in
	     c:\~mssetup.t\~msstfqf.t, where c: is one of your hard drives.)
	
	  c. From File Manager, select the file REGOCX16.EXE. Go to the Properties
	     submenu under the File menu. Deselect the read-only attribute. This allows
	     you to replace the REGOCX16.EXE file.
	
	  d. Copy updated REGOCX16.EXE to this location (c:\~mssetup.t\~msstfqf.t,
	     where c: is one of your hard drives).
	
	  e. After replacing REGOCX16.EXE, set the attribute for the new one back to
	     read-only.
	
	  f. Quit File Manager.
	
	5. Go back to the installation screen and continue with installation. Ignore all
	  registration message boxes until the installation is complete.
	
	NOTE: The above procedure has proven to be ineffective on some machines. If the
	procedure fails, follow the steps to make Visual Basic 4.0 function on the
	machine. Some of the controls may not register and may not be usable but the
	Visual Basic environment and most of the controls will be completely functional.
	There are VBX versions of many of the 16-bit OCX Custom Controls shipped with
	Visual Basic 3.0. These files can be used in place of the OCX version of the
	controls and can be obtained from the Visual Basic 3.0 CD-ROM or diskettes, or
	by calling Microsoft Visual Basic Technical Support.
	
	Registering Visual Basic Manually
	---------------------------------
	
	1. Run the Visual Basic setup until it stops responding.
	
	2. Reboot the machine, and start Windows.
	
	3. Start the File Manager, and select \SETUP directory on the Visual Basic
	  CD-ROM.
	
	4. Use the EXTRACT.EXE utility to find and decompress the Visual Basic
	  registration file:
	
	  On the File menu, in the Run dialog box, type:
	
	  EXTRACT.EXE /A /L C:\WINDOWS\ VB4-1.CAB *.REG,
	
	  where C:\WINDOWS\ is the windows directory of the machine, and press the ENTER
	  key.
	
	5. Use REGEDIT.EXE to register the registration files:
	
	  On the File menu, in the Run dialog box, type:
	
	  REGEDIT.EXE OLE2.REG and press the ENTER key.
	
	  Then type REGEDIT.EXE VBxxx.REG, and press the ENTER key, where xxx is PRO or
	  ENT depending on the version.
	
	6. Remove the OCX Custom Control references in the AUTO16LD.VBP.
	
	  a. Open the file AUTO16LD.VBP in Notepad in the Visual Basic directory.
	
	  b. Delete all lines that begin with "Object=". These are references to OCX
	     controls that will not be registered.
	
	  c. Save the file, and exit Notepad.
	
	7. Launch Visual Basic. It should now run properly.
	
	8. From the Tools menu, in Custom Controls, add any OCX that you choose. Do this
	  by using the Browse button and selecting the file. Visual Basic registers the
	  control and adds it to the project. All of the controls will be in the
	  \WINDOWS\SYSTEM directory with the extension *.OCX. One or more of the
	  controls may hang the machine when Visual Basic attempts to register them.
	  These controls will not be usable, but Visual Basic should still provide
	  enough functionality and have enough functioning controls to satisfy most
	  programmers. Some of the supporting DLL, TLB, and OLB files may not be
	  properly registered. They can be registered and used in the References dialog
	  in the same manner as the Custom Controls.
	
	NOTE: The OCX Custom Controls may cause similar problems with installation disks
	created using the Setup Wizard or a third-party setup utility. Register the
	incorrect controls manually using the REGSVR.EXE utility with CMOS/BIOS caches
	disabled (wherever possible).
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAppSetup kbVBp400 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB400Search kbVB400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
