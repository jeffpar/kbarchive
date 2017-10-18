---
layout: page
title: "Q264203: Enumdisk1.exe: Enumdisk Sample for Enumerating Disk Devices"
permalink: kb/264/Q264203/
---

## Q264203: Enumdisk1.exe: Enumdisk Sample for Enumerating Disk Devices

	Article: Q264203
	Product(s): Microsoft Windows NT
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbfile kbDDK kbOSWin2000 kbDSupport kbgraphxlinkcritical
	Last Modified: 21-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Driver Development Kit (DDK) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Win32 applications can use the SetupDi APIs to enumerate all of the devices that
	are available in the system. The Enumdisk1.exe sample demonstrates this
	technique by enumerating all the disk devices regardless of the disk type. The
	sample also obtains a handle to the device to send IOCTL commands to get the
	adapter and device properties. Further, this communicates to the device by
	sending a small computer system interface (SCSI) pass-through command to get the
	Inquiry data.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  DownloadDownload Enumdisk1.exe now
	  (http://download.microsoft.com/download/win2000ddk/sample/1/NT5/EN-US/enumdisk1.exe)
	
	Release Date: Sept. 21, 2000
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	The Enumdisk1.exe file contains the following files:
	
	File           Description
	--------------------------
	
	Enumdisk.c     Implements the Win32 application to enumerate the disk devices.
	Enumdisk.h     Header file for Enumdisk.c
	Sources        DDK build instructions
	Enumdisk.htm   The documentation for these samples (this file)
	Enumdisk.exe   Windows 2000 executable program (Free build)
	
	Device Enumeration
	------------------
	
	The Enumdisk1.exe sample uses the Setup class GUID_DEVCLASS_DISKDRIVE globally
	unique identifier (GUID) to enumerate all the disk devices that are installed in
	the system. The sample then obtains the Device ID by getting the Registry
	properties.
	
	The handle to the device is needed to send IOCTLs from a Win32 application. The
	device handle can be obtained by opening the device with the device interface
	name. The disk class driver exposes this interface by registering the device
	interface. It uses the DiskClassGuid interface GUID for device registration. A
	Win32 application can obtain this interface name by using the SetupDi APIs with
	the same interface GUID. By performing this in a loop, all the registered disk
	interfaces can be obtained. Because this value is obtained from the disk class
	driver, this technique works for all types of disk devices, such as SCSI,
	Integrated Device Electronics (IDE), Universal Serial Bus (USB), and Institute
	for Electrical and Electronics Engineers (IEEE) 1394.
	
	Device Properties
	-----------------
	
	IOCTL_STORAGE_QUERY_PROPERTY can be used to get the adapter and device
	properties, respectively. This IOCTL takes the STORAGE_PROPERTY_QUERY data
	structure as an argument. Before calling this IOCTL, the STORAGE_PROPERTY_ID and
	STORAGE_QUERY_TYPE members must be set accordingly. The STORAGE_PROPERTY_ID can
	be set to either StorageAdapterProperty or StorageDeviceProperty, and it
	determines the property to be returned. This data structure and its member
	values are defined in \Ntddk\Src\Ntddstor.h.
	
	Calling this StorageAdapterProperty IOCTL returns the STORAGE_ADAPTER_DESCRIPTOR
	data structure, which contains such adapter properties as the Bus Type, Maximum
	Transfer Length, Alignment Mask, and so on. StorageDeviceProperty returns the
	STORAGE_DEVICE_DESCRIPTOR data structure, which contains the Device Type, Vendor
	ID, Product ID, and so on. This information is obtained from the respective port
	driver. Refer to the Windows 2000 DDK documentation for more information about
	this IOCTL and data structures.
	
	SCSI Pass-Through Interface
	---------------------------
	
	The device handle obtained in this way can also be used to send SCSI pass-through
	commands to the device. The sample sends the Inquiry command to the device to
	get the Inquiry data. Refer to the SPTI sample, which is available in the
	Windows 2000 DDK, for more information on the SCSI pass-through interface.
	
	Building the Sample
	-------------------
	
	Click the Free Build Environment or Checked Build Environment icon under the
	Development Kits program group to set the basic environment variables that are
	needed by the Build utility.
	
	Change to the folder that contains the device source code, for example:
	
	  "cd c:\enumdisk" (without the quotation marks)
	
	Run the Build utility by typing "build -ceZ" (without the quotation marks), or
	use the BLD macro. This method invokes the Microsoft make routines that produce
	log files named Buildxxx.log, Buildxxx.wrn, and Buildxxx.err if there are any
	warnings or errors.
	
	Note that xxx stands for "fre" or "chk" depending on the environment chosen. If
	the build succeeds, the executable Enumdisk.exe file is placed in a
	platform-specific subfolder of your %TargetPath% folder that is specified in the
	Sources file.
	
	Running the Enumdisk1.exe Sample
	--------------------------------
	
	This sample does not require any arguments. Run the sample from a command-prompt
	window; all the disk device properties will be listed.
	
	REFERENCES
	==========
	
	Microsoft Windows 2000 Driver Development Kit
	
	Additional query words: enumdisk1
	
	======================================================================
	Keywords          : kbfile kbDDK kbOSWin2000 kbDSupport kbgraphxlinkcritical 
	Technology        : kbwin2000Search kbwin2000DDK kbAudDeveloper kbWinDDKSearch
	Version           : winnt:
	
	=============================================================================
	
