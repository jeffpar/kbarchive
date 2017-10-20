---
layout: page
title: "Q169491: SMSINST: How Status MIFs Work with the SMS Installer"
permalink: /kb/169/Q169491/
---

## Q169491: SMSINST: How Status MIFs Work with the SMS Installer

{% raw %}

	Article: Q169491
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:1.0; winnt:1.2
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork smsinst
	Last Modified: 03-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	- Microsoft Systems Management Server Installer version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can have Systems Management Server Installer generate a status MIF for your
	installation by specifying a MIF file name in the Installation Expert under the
	SMS tab in the Installation Interface attribute. If a file name is specified, a
	.mif file is created in the client's Windows directory to report the success or
	failure of an installation or uninstallation of an application. Package Command
	Manager (PCM) will pick up any file in the Windows directory that has an
	extension of .mif and that was created after PCM began the installation. PCM
	sends this back to the Systems Management Server site server.
	
	MORE INFORMATION
	================
	
	Fields on the SMS Tab Under Status MIF Information
	--------------------------------------------------
	
	Install MIF Filename and UnInstall MIF Filename:
	The install and uninstall file name should be <appname>.mif where
	<appname> is the name of your application.
	
	Manufacturer:
	This field contains the name of the company who developed the product being
	installed.
	
	Product:
	This field contains the name of the product being installed.
	
	Version:
	This field contains the version number of the product being installed. If you
	want to specify the language, you can include the %LANG% variable. For example:
	1.00.0 %LANG%.
	
	Serial Number:
	This field contains the serial number of the product being installed.
	
	Tracing a Success Status MIF
	----------------------------
	
	1. A success status .mif file is written to the Windows directory (%windir%).
	
	2. PCM immediately moves the file to the Logon.srv\Despoolr.box directory,
	  renames the file, and replaces the .mif extension with .pck.
	
	3. PCM also writes a status in a .sni file to the Logon.srv\Despoolr.box
	  directory. The following is from the Pcmwin.log file:
	
	        [05/21/97 16:58:28] Package Command Manager ==> Reporting on
	        completed package execution.
	        [05/21/97 16:58:28] Package Command Manager ==> No error was detected
	        while attempting to run the job.
	        [05/21/97 16:58:28] Package Command Manager ==> Need to report with
	        DMTF MIF: C:\WINNT\ins_note.mif
	        [05/21/97 16:58:28] Package Command Manager ==> Writing status
	        information to \\MANGO\SMS_SHR\despoolr.box
	
	4. Maintenance Manager moves the two status files to the Site.srv\
	  Despoolr.box\Receive directory.
	
	5. Despooler compares the two files, and because the status .mif file has a
	  status of success, the .pck file is deleted. The following is from the
	  Despool.log file:
	
	        ~Waiting for ready instruction file....
	        $$<SMS_DESPOOLER><Wed May 21 17:09:02 1997~><thread=DB>
	        ~Found ready instruction sni00000.sni
	        $$<SMS_DESPOOLER><Wed May 21 17:09:27 1997~><thread=DB>
	        ~Executing instruction of type
	        MICROSOFT|SMS|DOMAIN_COMMISSAR_WIREMOVE
	        $$<SMS_DESPOOLER><Wed May 21 17:09:27 1997~><thread=DB>
	        ~Despooler successfully executed one instruction.
	        $$<SMS_DESPOOLER><Wed May 21 17:09:29 1997~><thread=DB>
	        ~Memory usage: blocks=0 bytes=0
	        $$<SMS_DESPOOLER><Wed May 21 17:09:29 1997~><thread=DB>
	
	  NOTE: When the VALUE assigned to the Description attribute is set to NULL (see
	  sample piece of MIF below), the despooler reports the following error:
	
	  ~Despooler failed to execute the instruction, error code = cb
	
	  If no other error message precedes this error message, the error code is
	  nothing more than a warning.
	
	        START ATTRIBUTE
	           NAME = "Description"
	           ID = 2
	           ACCESS = READ-ONLY
	           STORAGE = SPECIFIC
	           TYPE = STRING(255)
	           VALUE = ""          <-- NO assignment
	        END ATTRIBUTE
	
	
	6. Despooler renames the file with a .mif extension and moves it to the
	  Dataload.box\Deltamif.col directory.
	
	7. Dataloader writes the success status to the workstation job detail record.
	  The following is from the Dataloadr.log file:
	
	        Waiting for a MIF...
	        $$<SMS_INVENTORY_DATA_LOADER><Wed May 21 17:36:12 1997~><thread=127>
	        Processing a machine...
	        $$<SMS_INVENTORY_DATA_LOADER><Wed May 21 17:36:12 1997~><thread=6F>
	        CMachine::FindMachine - Searching for matching Identification group
	        info
	        $$<SMS_INVENTORY_DATA_LOADER><Wed May 21 17:36:12 1997~><thread=6F>
	        Updating group: MICROSOFT|IDENTIFICATION|1.0...
	        $$<SMS_INVENTORY_DATA_LOADER><Wed May 21 17:36:13 1997~><thread=6F>
	        finished processing current machine.
	        $$<SMS_INVENTORY_DATA_LOADER><Wed May 21 17:36:13 1997~><thread=6F>
	        ~No more job status MIFs to be processed, terminating thread
	        $$<SMS_INVENTORY_DATA_LOADER><Wed May 21 17:36:13 1997~><thread=6F>
	
	8. If refreshed, the Job Status Details window shows a status of Complete for
	  that workstation.
	
	Tracing a Failed Install MIF
	----------------------------
	
	1. A failure status .mif file is written to the Windows directory (%windir%),
	  and the installation is paused.
	
	2. As soon as the pause is released, PCM moves the file to the
	  Logon.srv\Despoolr.box directory, renames the file, and replaces the .mif
	  extension with .pck.
	
	3. PCM also writes a status in a .sni file to the Logon.srv\Despoolr.box
	  directory.
	
	4. Maintenance Manager moves the two status files to the Site.srv
	  \Despoolr.box\Receive directory.
	
	5. Despooler compares the two files, and because the status .mif file has a
	  status of failed, the .sni file is deleted.
	
	6. Despooler renames the .pck file to *.emf and moves it to the
	  Dataload.box\Deltamif.col directory, while dataloader writes the failed
	  status to the workstation job detail record, where it will be interpreted as
	  retrying by the system (retrying because the job may be run again, and may
	  succeed).
	
	7. Dataloader also creates an event 374 for the failure where the comment, if
	  specified in the Job Properties, contains the description of the failure (if
	  available).
	
	8. Dataloader moves the .mif file to the Siterep.box directory, where Site
	  Reporter deletes the file or forwards it to the parent site (if there is
	  one).
	
	You can run an ad hoc query on Systems Management Server events with jobid=xxxxx
	and eventid=374. The results of this query will list all workstations where the
	job failed for that jobid.
	
	If logging is enabled for PCM, the description of the failure may be noted in the
	client's Ms\Sms\Pcmwin.log (or the log name specified) file.
	
	Additional query words: prodsms smsinst jobdetail
	
	======================================================================
	Keywords          : kbinterop kbnetwork smsinst 
	Technology        : kbSMSSearch kbSMS120 kbSMSI100
	Version           : WINDOWS:1.0; winnt:1.2
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
