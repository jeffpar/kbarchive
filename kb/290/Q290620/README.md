---
layout: page
title: "Q290620: HOWTO: Create an Alert to Automatically Generate a Dump Heap Log"
permalink: /kb/290/Q290620/
---

## Q290620: HOWTO: Create an Alert to Automatically Generate a Dump Heap Log

	Article: Q290620
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbDSupport kbiis400 kbiis500
	Last Modified: 21-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	One of the ways to troubleshoot a memory leak is to get a dump heap (DH) log or
	user-mode dump heap (UMDH) logs. Although you can usually get the logs manually,
	in some cases you may need to automate the process.
	
	In most cases, the memory increases at a relatively slow rate (for example, it
	occurs over five hours), so the system administrator has time to manually get
	the logs approximately every 30 minutes. However, sometimes the memory leak
	occurs suddenly, and the system may lose all of its memory in five minutes. In
	this case, it is useful to automate the DH log generation process.
	
	MORE INFORMATION
	================
	
	Steps to Set Up an Alert to Automatically Generate a DH Log
	-----------------------------------------------------------
	
	The following steps are based on a computer that is running Microsoft Windows
	2000. Although you can set up an alert to automatically generate a DH log on a
	Microsoft Windows NT 4.0-based computer, the user interface may vary.
	
	1. Make sure that you have a memory leak. A memory leak is usually indicated
	  when the Private Bytes counter grows to a large value. (In Internet
	  Information Server, this usually means 150 megabytes or greater.) Also, the
	  Working Set counter no longer runs side-by-side with the Private Bytes
	  counter.
	
	2. Follow the instructions in Q253706 "HOWTO: Isolate and Identify the Source of
	  Inetinfo or Other Process Memory Leaks" to manually generate the DH files.
	  Make sure that the DH works properly.
	
	  Note You do not need a checked build of Ntdll.dll if you have Windows NT 4.0
	  SP4 or later.
	
	3. Create a Microsoft Visual Basic Scripting Edition (VBScript) file named
	  Vbsdh.vbs that generates a DH log file and gives it a name that is related to
	  Time. For example, see the following sample code:
	
	  Note You must modify the path for DH, the process number that you want to
	  create the DH log for, and the output directory.
	
	  Dim objShell
	
	  dim args
	  dim time
	
	  set objShell = CreateObject("WScript.Shell")
	
	  ' Time looks like: 11/12/2000 6:41:20 PM
	
	  'Get the time
	  time = Now
	
	  'Remove the "/", and ":" characters and the spaces from the file name so
	  'that the file name is valid.
	  time = Replace(time, "/", "_", 1, 1)
	  time = Replace(time, "/", "_", 1, 1)
	  time = Replace(time, ":", "_", 1, 1)
	  time = Replace(time, ":", "_", 1, 1)
	  time = Replace(time, " ", "_", 1, 1)
	  time = Replace(time, " ", "_", 1, 1)
	
	  'Add the .txt extension
	  time = time & ".txt"
	
	  'Change the path of DH """c:\dh.exe""", the process number of the DLL host that
	  'you want to DH """2564""", and the path for the output file """c:\OutputDir\""".
	
	  args = "c:\dh.exe -p 2564 -f c:\OutputDir\" & time
	
	  objShell.Run "%comspec% /c " & args
	
	4. At a command prompt, type the following command to make sure that the correct
	  file name with the correct output is generated:
	
	  "c:\winnt\system32\cscript.exe vbsdh.vbs" (without the quotation marks)
	
	5. Create an alert that calls the VBScript file when the Private Bytes counter
	  grows larger than a certain value. To do this, follow these steps:
	
	  a. On the Start menu, point to Programs, point to Administrative Tools, and
	     then click Performance.
	
	  b. Click to expand Performance Logs and Alerts, and then click Alerts.
	
	  c. On the Action menu, click New Alert Settings, and type an alert name.
	
	  d. On the General tab, click Add.
	
	  e. In the Select Counters dialog box, in the Performance object list, click
	     Process. Click Select counters from list, and then click Private Bytes.
	     Click Select instances from list, and then click Inetinfo. Click Add, and
	     then click Close.
	
	  f. In the "Alert when the value is" box, click Over. In the Limit box, type a
	     large value such as "150000000" (without the quotation marks) (or 150
	     megabytes).
	
	  g. In the Interval spin box, set the interval to 10 seconds (or however long
	     you prefer, depending on how fast the memory grows).
	
	  h. On the Action tab, select the "Run this program" check box, and type the
	     following text in the text box:
	
	  "c:\winnt\system32\cscript.exe" (without the quotation marks)
	
	  i. Click Command Line Arguments, select the Text message check box, and type
	     the file path to the VBScript file that you created (for example,
	     C:\Vbsdh.vbs). Click OK.
	
	  j. Click Apply, and then click OK.
	
	  k. To start the alert, click the Start button on the Perfmon toolbar.
	
	The alert generates one log file every 10 seconds when the memory is over the
	limit that you set in step 5f.
	
	To test if the alert is working, you can set the limit to a very low value (for
	example, 200). Start the alert, and let it run for 40 seconds. After you confirm
	that the alert works, you can reset the value to a higher limit.
	
	Note In some scenarios, the automatically generated DH log may work for a number
	of times until the system grows very low on resources; then, the DH starts to
	return the c0000017 error. When this occurs, stop the alert.
	
	Also, the alert logs an event in the event log. This event is useful because it
	lists the value of the counter at the time of the memory leak. You can use this
	information to determine exactly how much the memory grows during the specific
	time interval that you set.
	
	You can also use this technique to troubleshoot any user-mode application that is
	running on a Windows NT-based or Windows 2000-based computer.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbiis400 kbiis500 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
