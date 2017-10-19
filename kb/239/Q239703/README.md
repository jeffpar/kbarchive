---
layout: page
title: "Q239703: ASP Template Cache Does Not Recognize Script Updates on Cluster"
permalink: /kb/239/Q239703/
---

## Q239703: ASP Template Cache Does Not Recognize Script Updates on Cluster

	Article: Q239703
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Active Server Pages (ASP) may not recognize or return updated ASP script files
	when Internet Information Server (IIS) is installed and running on Microsoft
	Cluster Server.
	
	CAUSE
	=====
	
	The ASP template cache is never cleared or updated after a required Cluster
	Server disk resource is taken off line due to a manual (test) failover. In a
	usual cluster environment, a disk device failover should only occur after a node
	has failed (crashed). This problem does not occur in a production cluster
	environment, in which the device failover occurs because the node has actually
	failed, so that applications and system services are reset by the system
	restart.
	
	The ASP template cache tracks directory changes to determine when a cached script
	file in the directory has been updated, and needs to be purged from the cache
	and reloaded. In a cluster environment, tracking directory changes requires more
	caution because Cluster Server allows a volume (disk mounted by a file system)
	to be dismounted while applications are running with open handles to the volume,
	which allows the device to be taken off line immediately. When a volume is
	dismounted, any open handles to that volume are no longer valid for reading,
	writing, or tracking directory change notifications.
	
	Cluster-aware applications can request notifications from Cluster Server when a
	volume has been dismounted; however, ASP is not cluster aware, so it is not
	notified to clear the template cache after a device is taken offline. Because
	ASP can no longer detect changes to script files in the monitored directory, it
	never purges the template cache, and subsequent changes to script files on the
	cluster device are not reflected until IIS is stopped and restarted.
	
	WORKAROUND
	==========
	
	To work around this problem, disable ASP template caching, and then use a script
	that unloads the IIS application when a required device is off line.
	
	To disable ASP Template Caching, please modify the registry entry
	"DisableMemoryCache" mentioned in Q301310 IIS 5 Common Registry Parameters (1 of
	2)"
	
	This workaround allows reliable use of the ASP cache with a script that flushes
	the cache when the site changes states. The script accomplishes this task by
	using the Active Directory Service Interfaces (ADSI) AppUnload method for the
	affected site when it is brought back online by cluster, which effectively
	flushes the ASP cache.
	
	The following is a sample script that flushes the cache for the root site:
	
	  ' unloadapps.vbs sample
	  const ForReading = 1,_ 
	  ForAppending = 8
	  const Path = "C:\unloadapps"
	
	  Sub LogError(ByVal FileName, ByVal Err, ByVal Detail)
	
	  DIM a
	  Dim fileio
	  Dim Seperator
	
	  on error resume next
	  Seperator = " "
	
	  set fileio = CreateObject("Scripting.FileSystemObject")
	  if fileio.FolderExists(Path) = FALSE then
	  fileio.CreateFolder(Path)
	  end if
	  Set a = fileio.OpenTextFile(Path + "\" + FileName, ForAppending, TRUE)
	  a.Write("Time: " + Time() + Seperator)
	  a.Write("Error: " + Hex(Err.Number) + Seperator)
	  a.Write("Description: " + Err.Description + Seperator)
	  a.WriteLine("Detail: " + Detail + Seperator)
	  a.Close
	  set a = nothing
	  set fileio = nothing
	
	  End Sub
	
	  Sub Main()
	
	  Dim PathList
	  Dim Path
	  Dim FileName
	
	  on error resume next
	  IIsObjectPath = "IIS://Localhost"
	  Set IIsObject = GetObject (IIsObjectPath)
	  PathList = IIsObject.GetDataPaths ("appwamclsid", IIS_DATA_INHERIT)
	  FileName = Replace(Date(),"/","-") + " unloadapps.log"
	  For Each Path in PathList
	
	  Set IISObject2 = GetObject (Path)
	  If Path = "IIS://Localhost/W3SVC" then
	  else
	
	  IISObject2.AppUnload()
	  if err.number > 0 then
	
	  LogError FileName,err,"Failed to unload " + Path
	  err.clear
	
	  else
	
	  LogError FileName,err,"Successfully unloaded application " + Path
	
	  end if
	
	  end if
	
	  Next
	
	  End Sub
	
	  Main
	
	The script must be added to the IIS cluster group as a process that is dependent
	on the site. To do this, perform the following steps:
	
	1. Copy the Unloadapps.vbs file to the c:\Scripts\Unloadapps.vbs directory on
	  all cluster nodes.
	
	2. In the Cluster Administrator, create a new generic application resource in
	  the IIS cluster group named "Flush ASP Cache" (without the quotation marks),
	  and then click Next.
	
	3. Allow all nodes to be possible owners, and then click Next.
	
	4. Place a resource dependency on the IIS server resource, and then click Next.
	
	5. From a command line, type "cmd /k cscript c:\scripts\unloadapps.vbs" (without
	  the quotation marks). (Note that this is different from the previous
	  instructions, so that the process stays open until the next failover and does
	  not get reported as resource failed.)
	
	6. Set the current directory to c:\scripts.
	
	7. Do not select Allow application to interact with desktop.
	
	8. Click Next, and then click Finish.
	
	9. Test failover to make sure the cache is flushed as expected.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
