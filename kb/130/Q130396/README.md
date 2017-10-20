---
layout: page
title: "Q130396: PC NTMMTA: Err Msg: Unable to Find Specified Instance INI..."
permalink: /kb/130/Q130396/
---

## Q130396: PC NTMMTA: Err Msg: Unable to Find Specified Instance INI...

{% raw %}

	Article: Q130396
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Multitasking MTA for Windows NT, version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you monitor an instance of External using the Microsoft Mail Multitasking
	MTA for Windows NT (NT MMTA), the following error may occur:
	
	  Unable to Find Specified Instance INI Section
	
	CAUSE
	=====
	
	External cannot read the EXTERNAL.INI file. One possible cause is that the
	EXTERNAL.INI file was saved as a Unicode file.
	
	Another possible cause for this error may be a missing instance name in the
	EXTERNAL.INI file. The instance name is required.
	
	RESOLUTION
	==========
	
	Save the EXTERNAL.INI as a text file.
	
	Add an Instance name to the EXTERNAL.INI file by doing the following:
	
	- The correct Instance Name was selected from the Mail Service Manager
	  (MSVMGR32.EXE) Edit Service dialog box. If not, either delete and recreate
	  the service from the Microsoft Mail Service Manager dialog box, or change the
	  settings in the EXTERNAL.INI.
	
	- The Instance Name field in the Edit Service dialog box does not contain
	  External -. The Instance Name field should only contain the actual instance
	  name. For example,
	
	  [External - RemoteUsr1]
	
	  In this example RemoteUsr1 is the instance name in the EXTERNAL.INI. This
	  should be the entry in the Instance Name field in the Edit Service dialog
	  box. The simplest way to ensure that this is entered correctly when you
	  create the service in the Create Service dialog box is to:
	
	  1. Click the Edit INI... button to open the EXTERNAL.INI file.
	
	  2. Highlight the service name in the EXTERNAL.INI file as explained above.
	
	  3. Copy the highlighted text to the clipboard by pressing Ctrl+C.
	
	  4. Go back to the Create Service dialog box and click the Instance Name
	     field.
	
	  5. Press Ctrl+V to paste the text from the clipboard to the Instance Name
	     field.
	
	MORE INFORMATION
	================
	
	For MONITOR.EXE to run properly from the Monitor button from Microsoft Mail
	Service Manager, the EXTERNAL.INI settings must be correct. Monitor will flash
	an error message briefly, then disappear. MONITOR.EXE is installed by default in
	the \WINNT35 directory.
	
	The Service Manager will allow you to create an External or Dispatch instance
	without an Instance name specified. These instances can not be run, and when the
	External or Dispatch instance is launched without an Instance name, the service
	will appear to start, but no mail is delivered. Also, if a Monitor is started it
	will flash on the screen quickly and then disappear.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailMMTA350NT
	Version           : :3.5
	
	=============================================================================
	

{% endraw %}
