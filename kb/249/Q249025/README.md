---
layout: page
title: "Q249025: Setup Logging in IIS 5.0"
permalink: /kb/249/Q249025/
---

## Q249025: Setup Logging in IIS 5.0

{% raw %}

	Article: Q249025
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000
	Last Modified: 09-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Internet Information Services (IIS) 5.0, included with Windows 2000,
	generates a Setup log file that can be used for Setup troubleshooting. This log
	file can be used to debug installation difficulties that are discovered after
	you attempt to install IIS. The "More Information" section of this article
	explains how IIS Setup works, and how to read the log file entries.
	
	MORE INFORMATION
	================
	
	How IIS Setup Works:
	
	IIS Setup is an optional component in the Windows 2000 Setup program; it gets
	called by the Windows 2000 Setup program, along with all other the optional
	components. The optional components are all listed in the Sysoc.inf file located
	in the %Windir%\Inf directory. The Windows 2000 Optional Component Manager
	(Ocmanage.dll) loads the Sysoc.inf file during Setup and calls the Setup DLLs
	described in the Sysoc.inf file. These components get different calls during
	various stages of Setup.
	
	The names of the DLLs are descriptive of the actions performed. For example,
	OC_INIT_COMPONENT requests the DLL to do its initialization routines.
	OC_QUEUE_FILE_OPS is called when the DLL fills its file queue with the list of
	files to install. OC_ABOUT_TO_COMMIT_QUEUE is called right before the files
	actually get copied to disk, and OC_COMPLETE_INSTALLATION is where the
	components' configuration settings are completed.
	
	The Iis5.log File:
	
	The Iis5.log file contains a log of the activities that occur during Setup. Any
	failures that occur during Setup are reported in the Iis5.log file. The log
	file's operations are controlled by the Setup INF file, located in the
	%Windir%\Inf directory. (Iis.inf is specified in %Windir%\Inf\Sysoc.inf). The
	entry in the Sysoc.inf file that corresponds with IIS Setup looks similar to the
	following:
	
	  iis=iis.dll,OcEntry,iis.inf,,7
	
	This entry shows that the IIS setup DLL file is Iis.dll, the entry point to the
	DLL is OcEntry, and the configuration file that Iis.dll uses to configure IIS is
	Iis.inf.
	
	An entry in the Iis.inf file can be used to specify the level of detail in the
	Iis5.log file. The parameter is named DebugLevel, and is listed in the
	[SetupInfo] section. The DebugLevel parameter can have the following numerical
	values:
	
	- 0 ? Show only errors
	- 1 ? Log warnings
	- 2 ? Trace level 1 (The least verbose option of the trace options.)
	- 3 ? Trace level 2
	- 4 ? Trace level 3
	
	The following code is an example of logging in the Iis5.log file. This example
	shows that Setup is registering the Asp.dll file:
	
	  [10/20/1999 16:40:53] OC_COMPLETE_INSTALLATION:iis_www:ProcessSection.[register_iis_www_4].Start. 
	  [10/20/1999 16:40:53] OC_COMPLETE_INSTALLATION:iis_www:...ProcessEntry:100=2... 
	  [10/20/1999 16:40:53] OC_COMPLETE_INSTALLATION:iis_www:------------------ 
	  [10/20/1999 16:40:53] OC_COMPLETE_INSTALLATION:iis_www:CallProcedureInDll(C:\WINNT\System32\inetsrv\asp.dll): DllRegisterServer 
	  [10/20/1999 16:40:54] OC_COMPLETE_INSTALLATION:iis_www:iOleInitialize: Succeeded: 0. MakeSure to call OleUninitialize. 
	  [10/20/1999 16:40:54] OC_COMPLETE_INSTALLATION:iis_www:CallProcedureInDll: Calling 'DllRegisterServer'.Start 
	  [10/20/1999 16:40:54] OC_COMPLETE_INSTALLATION:iis_www:CallProcedureInDll: Calling 'DllRegisterServer'.End.SUCCESS. 
	  [10/20/1999 16:40:54] OC_COMPLETE_INSTALLATION:iis_www:------------------
	
	The following code is an example of a failure to register the Asp.dll file:
	
	  [12/7/1999 14:24:0] OC_INIT_COMPONENT:!FAIL! 
	  [12/7/1999 14:24:0] OC_INIT_COMPONENT:CallProcedureInDll():C:\WINNT\System32\inetsrv\asp.dll:DllRegisterServer:() FAILED.
	
	REFERENCES
	==========
	
	http://www.microsoft.com/technet/iis/setuplog.asp
	http://www.microsoft.com/technet/iis/default.asp
	
	Additional query words: iis 5
	
	======================================================================
	Keywords          : kbOSWin2000 
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
