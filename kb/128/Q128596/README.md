---
layout: page
title: "Q128596: Default Wavemix.ini from Golf 2.0"
permalink: /kb/128/Q128596/
---

## Q128596: Default Wavemix.ini from Golf 2.0

{% raw %}

	Article: Q128596
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 12-JUN-2001
	
	kbusage kbref
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Golf for Windows, version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information is the default WAVEMIX.INI file installed by Microsoft
	Golf version 2.0. This file is copied into the Windows directory by Setup. This
	text has not been modified.
	
	WAVEMIX.INI FILE
	
	[general]
	; if ShowDevices exists and is non-zero then will display wave out
	devices and other stuff
	;
	; ShowDevices=0  : default
	; ShowDevices=1    : show output from waveOutGetDevCaps
	ShowDevices=0
	
	; if WaveOutDevice exists it should be between zero and one less num
	devices
	
	; the default is WAVE_MAPPER
	;
	; WaveOutDevice=0 : use the first device (default)
	; WaveOutDevice=1 : use the second device
	; WaveOutDevice=-1: use WAVE_MAPPER (will use [Unknow Device] setttings)
	;
	;
	WaveOutDevice=0
	
	; Wavemix will detect if it is running on a 286 and not use any 386
	instructions
	; you can force it to use the 286 only code on a 386 by setting cmixit=1
	; cmixit=0 (default)
	; cmixit=1 uses only 286 code (even on a 386 or >)
	
	[default]
	; Remix=1 = ResetRemix()
	; Remix=2 = NoResetRemix()
	; default=1
	Remix=1
	
	; GoodWavePos=0 = uses timeGetTime() (default)
	; GoodWavePos=1 = uses waveOutGetPosition()
	GoodWavePos=0
	
	; WaveBlocks=#  (2<=#<=6) the number of ping pong buffers to use
	; default=3
	WaveBlocks=3
	
	; WaveBlockLen=#  min = 512 max = 4096
	;   if a number is not specified Wavemix.dll will try to determine a size
	;
	
	; SamplesPerSec=11 (11.025 Khz) (default)
	;              =22 (22.04  KHz)
	;              =44 (44.1   KHz)
	SamplesPerSec=11
	
	[Windows Sound System Playback]
	; Need to set do11khzmce=FALSE in system.ini->[sndsys.drv] if want to
	use Remix=1 and SamplesPerSec=11
	Remix=1
	GoodWavePos=1
	WaveBlocks=4
	SamplesPerSec=22
	;WaveBlockLen=
	
	[MultiSound Wave Out]
	Remix=2
	GoodWavePos=1
	WaveBlocks=3
	;WaveBlockLen=
	
	[SB16 Wave Out]
	Remix=1
	GoodWavePos=0
	WaveBlocks=5
	SamplesPerSec=22
	;WaveBlockLen=
	
	[SBPro Wave Out]
	Remix=1
	GoodWavePos=0
	WaveBlocks=5
	;WaveBlockLen=
	
	[Media Vision Waveform Output]
	Remix=1
	GoodWavePos=0
	WaveBlocks=4
	;WaveBlockLen=
	
	[MVI Pro Audio/CDPC Wave Output]
	Remix=1
	GoodWavePos=0
	WaveBlocks=4
	;WaveBlockLen=
	
	[UltraSound Waveform Output]
	Remix=2
	GoodWavePos=0
	WaveBlocks=3
	SamplesPerSec=11
	
	[not compatible]
	; sound drivers that are not compatible with wavemix.dll can be added here
	; (the =1 is necessary).  One of the major conflicts occur with the PC
	Speake
	r
	; drivers.  The wavemix.dll will only work with devices that support
	asynchronous
	; operation - most of the pc speaker drivers are synchronous.  The
	name of the devices
	; can be easily seen by setting ShowDevices=1 in the [general]
	section and then running
	; a program which uses the wavemixer.  One major problem with some of
	the pc speaker
	; drivers is that they report that they are asynchronous when they
	are really not.
	
	Wave driver for PC Speaker=1
	
	Additional query words: 2.00 Sound Blaster Mediavision w_golf multi media multimedia multi-media
	
	======================================================================
	Keywords          : win31 
	Technology        : kbHomeProdSearch kbGamesSearch kbGolfSearch kbGolf200
	Version           : WINDOWS:2.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
