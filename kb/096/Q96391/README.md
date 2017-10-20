---
layout: page
title: "Q96391: DoubleSpace Estimated &amp; Actual Compression Ratios"
permalink: /kb/096/Q96391/
---

## Q96391: DoubleSpace Estimated &amp; Actual Compression Ratios

{% raw %}

	Article: Q96391
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22; WINDOWS:95
	Operating System(s): 
	Keyword(s): msdos
	Last Modified: 01-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	This article discusses common questions and issues with DoubleSpace actual
	compression ratio (ACR) and estimated compression ratio (ECR). The following
	three subjects are covered:
	
	- Actual Compression Ratio
	
	- Estimated Compression Ratio
	
	- Viewing and Changing the Compression Ratio
	
	MORE INFORMATION
	================
	
	Actual Compression Ratio
	------------------------
	
	The actual compression ratio (ACR) represents the compression ratio for data that
	already exists on a drive. The ACR varies over time depending on the type of
	files you store on your hard disk.
	
	The ACR is calculated by dividing the sum of the uncompressed data size by the
	physical space consumed after the data is compressed. For example, if a disk
	with 100 megabytes (MB) of uncompressed data is compressed and occupies 50 MB of
	disk space, the compression ratio is 2:1. The formula is as follows:
	
	  100MB/50MB =2.0
	
	NOTE: 2.0 is written as 2.0:1 (that is, 2 to 1)
	
	Estimated Compression Ratio
	---------------------------
	
	The estimated compression ratio is a number that DoubleSpace uses to calculate
	the amount of free space on a compressed drive. Changing the ECR doesn't change
	the compression algorithm or the ACR. It simply changes the value that
	DoubleSpace uses to estimate the free disk space.
	
	You may need to increase the compression ratio if you are trying to store several
	new highly compressible files and you are low on disk space.
	
	For more information on ECR:
	
	- Run DoubleSpace, choose Change Ratio from the Drive menu, and then press the
	  F1 function key.
	
	-or-
	
	- Type "help dblspace /ratio" (without the quotation marks) at the MS-DOS
	  command prompt.
	
	Viewing and Changing the Compression Ratio
	------------------------------------------
	
	To view the ACR and ECR for a drive, type "dblspace" (without the quotation
	marks) at the MS-DOS command prompt, select the drive you are interested in, and
	then press the ENTER key.
	
	To view the ACR for a file or directory, use the DIR /C or DIR /CH command. For
	example, to see the ACR for COMMAND.COM, type the following at the MS-DOS
	command prompt:
	
	  " dir c:\command.com /ch" (without the quotation marks)
	
	To view the ACR for the DOS directory, type the following at the MS-DOS command
	prompt:
	
	  " dir \dos /ch" (without the quotation marks)
	
	NOTE: DIR /C reports the ACR of the compressed data based on an 8-kilobyte (K)
	cluster size. DIR /CH reports the ACR based on the compressed data based on the
	host drive cluster size. Use this number when you compare the ACR and ECR.
	
	To set the ECR to the ACR value, type "dblspace /ratio" (without the quotation
	marks) at the MS-DOS command prompt.
	
	To set the ECR to a specific value, type the following at the MS-DOS command
	prompt:
	
	  " dblspace /ratio=n.n" (without the quotation marks)
	
	where "n.n" is the ECR value.
	
	NOTE: Changing the size of the host drive changes the ECR from the default value
	(2.0:1) to the ACR value.
	
	Additional query words: 6.00 double space dblspace 6.20
	
	======================================================================
	Keywords          : msdos 
	Technology        : kbWin95search kbZNotKeyword3 kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22; WINDOWS:95
	
	=============================================================================
	

{% endraw %}
