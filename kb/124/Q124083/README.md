---
layout: page
title: "Q124083: SMS: ViewNAD and the Network Applications Database (NAD)"
permalink: /kb/124/Q124083/
---

## Q124083: SMS: ViewNAD and the Network Applications Database (NAD)

	Article: Q124083
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbusage kbDatabase kbPGC smsdatabase smspgc
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	ViewNAD provides a text based graphical display of the current Systems
	Management Server Network Applications Database (NAD) for review. This article
	describes how to use the ViewNAD utility.
	
	MORE INFORMATION
	================
	
	VIEWNAD.EXE    Dumps the NAD database for review
	Environment:   32 bit Windows NT
	Usage:         VIEWNAD
	Execute VIEWNAD.EXE from the directory:
	
	  \\<logon server>\SMS\LOGON.SRV\APPCTRL.BOX\DATABASE
	
	ViewNAD provides a text based graphical display of the current Network
	Applications Database for review. This database consists of *.HGF (groups) and
	*.HAF (applications) files. These files are parsed by ViewNAD and are then
	displayed.
	
	The NAD database resides on each SMS logon server in the
	..\LOGON.SRV\APPCTRL.BOX\DATABASE directory. The *.HAF files contain the
	applications available and the *.HGF files contain information on what global
	user groups have access to these applications.
	
	An SMS client uses the Program Group Control (PGC) utility to read these
	databases and update the users desktop based on the information in the files.
	
	This is accomplished by using a LAN Manager API to enumerate all global user
	groups that the current user belongs to in the currently logged on domain. PGC
	will then compare the list generated with the user groups listed in the NAD
	files and update the clients desktop to match the NAD list of applications that
	are associated with these user groups.
	
	There are three sections to the ViewNAD output.
	
	The first section lists what groups the currently logged on user of ViewNAD
	belongs to.
	
	The second section contains a list of the NAD objects. The first line contains
	the return code 1 or 0 for success/failure and the size of the buffer holding
	the objects. It then lists all the NAD objects in the database. The first three
	characters are the site code of the originally created package.
	
	The third section contains the NAD program item information. Each program group
	is listed with its associated program items. Below is the record format.
	
	Program Group:   <Internal Database Unique ID>
	 Group:         Name of program group
	 Users:         A list of global user groups that have been granted access
	                to this program group
	 <SMS Program Item Unique ID>
	 Registry:      Name of the clients registry key for this program item
	 Description:   Name of the program item
	 Command:       Command line executable file name
	 Servers:       UNC names of the SMS distribution servers available.
	 Drive:         Type of redirection required (drive mode)
	                   If not listed then runs with UNC name
	                   <"?">: Requires a drive letter
	                   <letter>: Requires this specific drive letter
	 Platform:      Bit mask of supported platforms. Currently this data is
	                invalid. ViewNAD parses this data incorrectly.
	
	Below is an example of a ViewNAD output of an SMS site's NAD database:
	
	  INTERACTIVE
	  LOCAL
	  Department 8954
	  psscnsred-se
	  Administrators
	  Everyone
	  Domain Users
	
	  Get Objects Return Code 1 Size 45
	  BPC00001
	  BPC00002
	  BPC00003
	  BPC00004
	  GBL00003
	
	  Program Group ======= BPC00001 ==========
	    Group          MS Office
	    Users          psscnsred-mgr;psscnsred-se
	    [ASCII 195][ASCII 196] BPC00007
	    [ASCII 179]  Registry    msoffpro+autoconv:msapps
	    [ASCII 179]  Description Graph AutoConvert
	    [ASCII 179]  Command     msgraph5\autoconv.exe
	    [ASCII 179]  Servers     \\CNS-SMS\ofc43_sh\;\\CNSSUP2\ofc43_sh\ 
	    [ASCII 179]  Drive       ?
	    [ASCII 179]  Platform    51EA851EA951EAA51EAB
	    [ASCII 195][ASCII 196] BPC0000C
	    [ASCII 179]  Registry    msoffpro+graflink
	    [ASCII 179]  Description GraphicsLink
	    [ASCII 179]  Command     graflink.exe
	    [ASCII 179]  Servers     \\CNS-SMS\ofc43_sh\;\\CNSSUP2\ofc43_sh\ 
	    [ASCII 179]  Drive       ?
	    [ASCII 179]  Platform    51EA851EA951EAA51EAB
	    [ASCII 195][ASCII 196] BPC0000A
	    [ASCII 179]  Registry    msoffpro+wrkgadm
	    [ASCII 179]  Description MS Access Workgroup Administrator
	    [ASCII 179]  Command     wrkgadm.exe
	    [ASCII 179]  Servers     \\CNS-SMS\ofc43_sh\;\\CNSSUP2\ofc43_sh\ 
	    [ASCII 179]  Drive       ?
	    [ASCII 179]  Platform    51EA851EA951EAA51EAB
	    [ASCII 195][ASCII 196] BPC0000D
	    [ASCII 179]  Registry    msoffpro+mplayer
	    [ASCII 179]  Description Media Player
	    [ASCII 179]  Command     mplayer.exe
	    [ASCII 179]  Servers     \\CNS-SMS\ofc43_sh\;\\CNSSUP2\ofc43_sh\ 
	    [ASCII 179]  Drive       ?
	    [ASCII 179]  Platform    51EA851EA951EAA51EAB
	    [ASCII 195][ASCII 196] BPC00009
	    [ASCII 179]  Registry    msoffpro+msaccess
	    [ASCII 179]  Description Microsoft Access
	    [ASCII 179]  Command     msaccess.exe
	    [ASCII 179]  Servers     \\CNS-SMS\ofc43_sh\;\\CNSSUP2\ofc43_sh\ 
	    [ASCII 179]  Drive       ?
	    [ASCII 179]  Platform    51EA851EA951EAA51EAB
	    [ASCII 195][ASCII 196] BPC00004
	    [ASCII 179]  Registry    msoffpro+excel
	    [ASCII 179]  Description Microsoft Excel
	    [ASCII 179]  Command     excel.exe
	    [ASCII 179]  Servers     \\CNS-SMS\ofc43_sh\;\\CNSSUP2\ofc43_sh\ 
	    [ASCII 179]  Drive       ?
	    [ASCII 179]  Platform    51EA851EA951EAA51EAB
	    [ASCII 195][ASCII 196] BPC00001
	    [ASCII 179]  Registry    msoffpro+msoffice
	    [ASCII 179]  Description Microsoft Office
	    [ASCII 179]  Command     msoffice.exe
	    [ASCII 179]  Servers     \\CNS-SMS\ofc43_sh\;\\CNSSUP2\ofc43_sh\ 
	    [ASCII 179]  Drive       ?
	    [ASCII 179]  Platform    51EA851EA951EAA51EAB
	    [ASCII 195][ASCII 196] BPC00006
	    [ASCII 179]  Registry    msoffpro+powerpnt
	    [ASCII 179]  Description Microsoft PowerPoint
	    [ASCII 179]  Command     powerpnt.exe
	    [ASCII 179]  Servers     \\CNS-SMS\ofc43_sh\;\\CNSSUP2\ofc43_sh\ 
	    [ASCII 179]  Drive       ?
	    [ASCII 179]  Platform    51EA851EA951EAA51EAB
	    [ASCII 195][ASCII 196] BPC00005
	    [ASCII 179]  Registry    msoffpro+msquery:msapps
	    [ASCII 179]  Description Microsoft Query
	    [ASCII 179]  Command     msquery\msquery.exe
	    [ASCII 179]  Servers     \\CNS-SMS\ofc43_sh\;\\CNSSUP2\ofc43_sh\ 
	    [ASCII 179]  Drive       ?
	    [ASCII 179]  Platform    51EA851EA951EAA51EAB
	    [ASCII 195][ASCII 196] BPC00002
	    [ASCII 179]  Registry    msoffpro+winword
	    [ASCII 179]  Description Microsoft Word
	    [ASCII 179]  Command     winword.exe
	    [ASCII 179]  Servers     \\CNS-SMS\ofc43_sh\;\\CNSSUP2\ofc43_sh\ 
	    [ASCII 179]  Drive       ?
	    [ASCII 179]  Platform    51EA851EA951EAA51EAB
	    [ASCII 195][ASCII 196] BPC0000B
	    [ASCII 179]  Registry    msoffpro+ofreadme
	    [ASCII 179]  Description Office Readme Help
	    [ASCII 179]  Command     ofreadme.hlp
	    [ASCII 179]  Servers     \\CNS-SMS\ofc43_sh\;\\CNSSUP2\ofc43_sh\ 
	    [ASCII 179]  Drive       ?
	    [ASCII 179]  Platform    51EA851EA951EAA51EAB
	    [ASCII 195][ASCII 196] BPC0000E
	    [ASCII 179]  Registry    msoffpro+preview
	    [ASCII 179]  Description PowerPoint
	    [ASCII 179]  Command     preview.exe
	    [ASCII 179]  Servers     \\CNS-SMS\ofc43_sh\;\\CNSSUP2\ofc43_sh\ 
	    [ASCII 179]  Drive       ?
	    [ASCII 179]  Platform    51EA851EA951EAA51EAB
	    [ASCII 195][ASCII 196] BPC00008
	    [ASCII 179]  Registry    msoffpro+pptview
	    [ASCII 179]  Description PowerPoint Viewer
	    [ASCII 179]  Command     pptview.exe
	    [ASCII 179]  Servers     \\CNS-SMS\ofc43_sh\;\\CNSSUP2\ofc43_sh\ 
	    [ASCII 179]  Drive       ?
	    [ASCII 179]  Platform    51EA851EA951EAA51EAB
	    [ASCII 195][ASCII 196] BPC00003
	    [ASCII 179]  Registry    msoffpro+macrode
	    [ASCII 179]  Description Word Dialog Editor
	    [ASCII 179]  Command     macrode.exe
	    [ASCII 179]  Servers     \\CNS-SMS\ofc43_sh\;\\CNSSUP2\ofc43_sh\ 
	    [ASCII 179]  Drive       ?
	    [ASCII 179]  Platform    51EA851EA951EAA51EAB
	    [ASCII 195][ASCII 196] BPC0000F
	    [ASCII 179]  Registry    MSAPPS
	    [ASCII 179]  Description MSAPPS Shared Components
	    [ASCII 179]  Command     <no command for applets>
	    [ASCII 179]  Servers     \\CNS-SMS\msappssh\;\\CNSSUP2\msappssh\ 
	    [ASCII 179]  Drive       ?
	    [ASCII 179]  Platform    51EA851EA951EAA51EAB
	
	  Program Group ======= BPC00002 ==========
	    Group          CNS Documents
	    Users          psscnsred-mgr;psscnsred-se
	    [ASCII 195][ASCII 196] BPC0001D
	    [ASCII 179]  Registry    oct94hcl.hlp
	    [ASCII 179]  Description NT 3.5 October HCL
	    [ASCII 179]  Command     miscinfo\oct94hcl.hlp
	    [ASCII 179]  Servers     \\CNS-SMS\cns-docs\;\\CNSAPPS1\cns-docs\;\\CNSSUP2\cns-
	                   docs\ 
	    [ASCII 179]  Drive       ?
	    [ASCII 179]  Platform    556A8556A9556AA556AB
	    [ASCII 195][ASCII 196] BPC00014
	    [ASCII 179]  Registry    SP2help
	    [ASCII 179]  Description NT Service Pack 2
	    [ASCII 179]  Command     SP2-3.1\fixlist.hlp
	    [ASCII 179]  Servers     \\CNS-SMS\cns-docs\;\\CNSAPPS1\cns-docs\;\\CNSSUP2\cns-
	                   docs\ 
	    [ASCII 179]  Drive       ?
	    [ASCII 179]  Platform    51EA851EA951EAA51EAB
	    [ASCII 195][ASCII 196] BPC00015
	    [ASCII 179]  Registry    NTSP2a
	    [ASCII 179]  Description NT Service Pack 2a
	    [ASCII 179]  Command     SP2a-3.1\fixlist.hlp
	    [ASCII 179]  Servers     \\CNS-SMS\cns-docs\;\\CNSAPPS1\cns-docs\;\\CNSSUP2\cns-
	                   docs\ 
	    [ASCII 179]  Drive       ?
	    [ASCII 179]  Platform    556A8556A9556AA556AB
	    [ASCII 195][ASCII 196] BPC00016
	    [ASCII 179]  Registry    NTSP2b
	    [ASCII 179]  Description NT Service Pack 2b
	    [ASCII 179]  Command     SP2b-3.1\FIXLIST.HLP
	    [ASCII 179]  Servers     \\CNS-SMS\cns-docs\;\\CNSAPPS1\cns-docs\;\\CNSSUP2\cns-
	                   docs\ 
	    [ASCII 179]  Drive       ?
	    [ASCII 179]  Platform    51EA851EA951EAA51EAB
	    [ASCII 195][ASCII 196] BPC0002D
	    [ASCII 179]  Registry    BPC0002D
	    [ASCII 179]  Description NT Service Pack 3
	    [ASCII 179]  Command     SP3-3.1\FIXLIST.HLP
	    [ASCII 179]  Servers     \\CNS-SMS\cns-docs\;\\CNSAPPS1\cns-docs\;\\CNSSUP2\cns-
	                   docs\ 
	    [ASCII 179]  Platform    555C0555C1555C2555C3
	
	Additional query words: sms prodsms
	
	======================================================================
	Keywords          : kbnetwork kbusage kbDatabase kbPGC smsdatabase smspgc 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
