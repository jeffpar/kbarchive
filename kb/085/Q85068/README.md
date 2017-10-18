---
layout: page
title: "Q85068: Displaying Data for Debugging in MASM"
permalink: kb/085/Q85068/
---

## Q85068: Displaying Data for Debugging in MASM

	Article: Q85068
	Product(s): Microsoft Macro Assembler
	Version(s): MS-DOS:5.x,6.0,6.0a,6.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.x, 6.0, 6.0a, 6.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is sometimes helpful to be able to find out the contents of a register or
	memory location without using a debugger. The following two routines will print
	the value of the AX register to the screen in hexadecimal. The first routine
	accomplishes this by calling MS-DOS Interrupt 21h. The second routine
	accomplishes the same thing by using BIOS Interrupt 10h. Depending on what the
	program is doing, one of these routines may be more suitable than the other.
	
	MORE INFORMATION
	================
	
	Sample Code 1
	-------------
	
	  ; Assemble options needed: none
	
	  .MODEL small
	
	  .STACK
	
	  .CODE
	
	  Start:
	            mov ax, 0FFFFh     ; Load AX with something distinctive.
	            call print_word    ; Print the contents of the AX register.
	
	            mov ax, 4c00h      ; Prepare to exit.
	            int 21h            ; Exit.
	
	  print_word PROC              ; MS-DOS version.
	            push dx            ; Save all registers that are used.
	            push cx
	            push bx
	            push ax
	
	            mov dx, 4          ; Loop will print out 4 hex characters.
	  nexthex:
	            push dx            ; Save the loop counter.
	            mov cl, 4          ; Rotate register 4 bits.
	            rol ax, cl
	            push ax            ; Save current value in AX.
	
	            and al, 0Fh        ; Mask off all but 4 lowest bits.
	            cmp al, 10         ; Check to see if digit is 0-9.
	            jl decimal         ; Digit is 0-9.
	            add al, 7          ; Add 7 for Digits A-F.
	  decimal:
	            add al, 30h        ; Add 30h to get ASCII character.
	
	            mov dl, al
	            mov ah, 02h        ; Prepare for interrupt.
	            int 21h            ; Do MS-DOS call to print out value.
	
	            pop ax             ; Restore value to AX.
	            pop dx             ; Restore the loop counter.
	            dec dx             ; Decrement loop counter.
	            jnz nexthex        ; Loop back if there is another character
	                               ; to print.
	
	            pop ax             ; Restore all registers that were used.
	            pop bx
	            pop cx
	            pop dx
	            ret
	  print_word ENDP
	
	  END Start
	
	Sample Code 2
	-------------
	
	  ; Assemble options needed: none
	
	  .MODEL small
	
	  .STACK
	
	  .CODE
	
	  Start:
	            mov ax, 0FFFFh     ; Load AX with something distinctive.
	            call print_word    ; Print the contents of the AX register.
	
	            mov ax, 4c00h      ; Prepare to exit.
	            int 21h            ; Exit.
	
	  print_word PROC              ; BIOS version.
	            push dx            ; Save all registers that are used.
	            push cx
	            push bx
	            push ax
	
	            mov dx, 4          ; Loop will print out 4 hex characters.
	  nexthex:
	            mov cl, 4          ; Rotate register 4 bits.
	            rol ax, cl
	            push ax            ; Save current value in AX.
	
	            and al, 0Fh        ; Mask off all but 4 lowest bits.
	            cmp al, 10         ; Check to see if digit is 0-9.
	            jl decimal         ; Digit is 0-9.
	            add al, 7          ; Add 7 for Digits A-F.
	  decimal:
	            add al, 30h        ; Add 30h to get ASCII character.
	
	            mov bx, 0003h      ; BH= Page 0, BL= Foreground Color.
	            mov ah, 0Eh        ; Prepare for interrupt.
	            int 10h            ; Do BIOS call to print out value.
	
	            pop ax             ; Restore value to AX.
	            dec dx             ; Decrement loop counter.
	            jnz nexthex        ; Loop back if there is another character
	                               ; to print.
	
	            pop ax             ; Restore all registers that were used.
	            pop bx
	            pop cx
	            pop dx
	            ret
	  print_word ENDP
	
	  END Start
	
	Additional query words: 5.00 5.10 5.10a 6.00 6.00a 6.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM600a kbMASM600b
	Version           : MS-DOS:5.x,6.0,6.0a,6.0b
	
	=============================================================================
	
