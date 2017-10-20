---
layout: page
title: "Q82298: Windows 3.1 Standard Mode and the VCPI"
permalink: /kb/082/Q82298/
---

## Q82298: Windows 3.1 Standard Mode and the VCPI

{% raw %}

	Article: Q82298
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows 3.1 standard mode is compatible with expanded memory managers such as
	EMM386, 386MAX, and QEMM386. However, there are several problems with the
	Virtual Control Program Interface (VCPI) used by these products to provide
	access to extended memory in standard mode. Under most circumstances, users of
	machines with 386 or higher processors and with more than 2 megabytes (MB) of
	memory installed should use enhanced mode rather than standard mode.
	
	MORE INFORMATION
	================
	
	Windows 3.1 can run in standard mode when an expanded memory manager (EMM) is
	active. An EMM uses the paging mechanism of the 386 or higher processor to map
	extended memory blocks, as EMS pages, into the first megabyte of address space
	where no real memory is present. To do so, the EMM puts the processor into
	protected mode, and keeps the emulated upper memory block (UMB) and EMS page
	frames always available for processes designed for real mode (such as MS-DOS),
	installed device drivers, and terminate-and-stay-resident (TSR) programs. When
	one of these processes is running, the processor is in virtual-8086 (v86) mode,
	with paging on and the address mapping specified by the EMM.
	
	In this configuration, the EMM services request to enter and leave protected mode
	using the VCPI. The EMM may also allocate extended memory. The standard mode
	MS-DOS Extender, DOSX, uses VCPI to switch to protected mode and to v86 mode.
	Therefore, in standard mode, the EMM remains active and continues to run
	"underneath" Windows. In enhanced mode, the EMM is deactivated for the duration
	of the Windows session.
	
	Several questions have arisen regarding "VCPI support" under standard-mode
	Windows. If no EMM is installed, more extended memory and more total memory is
	available to Windows. An EMM uses a considerable amount of extended memory to
	store itself and its tables. The system incurs additional overhead because
	paging must be active at all times. Unless an EMM is absolutely necessary,
	possibly because an MS-DOS-based application will not run without EMS, Windows
	will probably run better without an EMM. Windows enhanced mode runs on a machine
	with 2 MB of RAM memory installed if no EMM is present.
	
	Windows standard mode does not support an MS-DOS-based application that is a DPMI
	(DOS Protected Mode Interface) client. However, if the EMM also provides DPMI
	services, DOSX will not interfere with these services.
	
	The standard-mode task switcher attempts to arbitrate extended memory use between
	Windows-based and MS-DOS-based applications. It performs this arbitration by
	hooking the XMS function dispatcher. This does not work properly if an EMM is
	installed, primarily because the extended memory portion of the address space in
	standard mode is not accessible to the MS-DOS portion of the switcher. For this
	reason, when an EMM is present in standard mode, users will experience the
	following types of problems:
	
	- Performance degradation when the system switches between tasks because the
	  task switcher cannot use XMS memory for swap space.
	
	- Applications, such as AutoCad and Lotus 1-2-3, that include an MS-DOS
	  extender will not run.
	
	
	Because the standard-mode task switcher can't access Windows's extended memory,
	it can't use extended memory for swap space when an EMM is present. Users may
	experience some performance degradation switching between MS-DOS-based
	applications in this configuration. Enhanced mode is recommended to run many
	MS-DOS-based applications under Windows.
	
	Windows standard mode does not specifically prevent VCPI applications from
	running. However, because the task switcher cannot effectively use extended
	memory provided by an EMM, an MS-DOS-based application that uses extended memory
	probably will fail to run in the standard-mode MS-DOS box. This applies equally
	to applications that use XMS, VCPI, and DPMI. While it may be possible to run an
	MS-DOS-based application that uses extended memory in an MS-DOS box under
	standard-mode Windows, there is no general solution to the problems involved.
	
	The VCPI specification is maintained by Phar Lap Software, Inc., and Quarterdeck
	Office Systems. Windows 3.1 standard mode complies with version 1.10 of the VCPI
	specification. Because many commercial EMM products can be configured to not
	provide EMS, DOSX will attempt to use VCPI if the following are true:
	
	- The INT 67h vector is not null
	
	- A device named "EMMXXXX0" is present
	
	- The VCPI detection call (INT 67h, AX=DE00h) succeeds
	
	In particular, DOSX does not require the presence of a LIM 4.0
	(Lotus/Intel/Microsoft expanded memory specification) driver or a LIM 3.2 page
	frame.
	
	Additional query words: 3.10 no32bit
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
